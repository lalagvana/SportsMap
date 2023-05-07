import { useCallback, useMemo, useState } from 'react';
import { mutate } from 'swr';
import { hasCookie } from 'cookies-next';
import { toast } from 'react-toastify';

import { FacilityType } from 'src/client/shared/types/facilities';
import { deleteFacility, partialUpdateFacility } from 'src/client/shared/utils/api/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { Notification, ImageTypeOption } from 'src/client/shared/components/Notification';

type UseToggleVisibilityProps = {
    setLoading: (value: boolean) => void;
    id: string;
    initialHidden: boolean;
    onSuccess?: () => void;
};

export const useToggleVisibilityHandler = ({ setLoading, id, initialHidden, onSuccess }: UseToggleVisibilityProps) => {
    const notificationProps = useMemo(
        () =>
            initialHidden
                ? {
                      heading: 'Объект снова отображается!',
                      description: 'Объект виден другим пользователям. Вы можете его сделать скрытым в любой момент',
                      imageType: 'open' as ImageTypeOption,
                  }
                : {
                      heading: 'Вы скрыли объект!',
                      description: 'Объект не виден другим пользователям. Вы можете его сделать видимым в любой момент',
                      imageType: 'hide' as ImageTypeOption,
                  },
        [initialHidden]
    );

    return useCallback(async () => {
        try {
            await partialUpdateFacility(id, { hidden: !initialHidden });

            setLoading(true);
            await mutate(`catalog${apiRoutes.facilitySearch}`);
            if (onSuccess) {
                onSuccess();
            }
            toast(<Notification type="success" {...notificationProps} />);
            setLoading(false);
        } catch (error) {
            toast(<Notification description={prepareMessage(error)} imageType="cross" type="error" />);
            setLoading(false);

            throw error;
        }
    }, [id, setLoading, initialHidden, notificationProps]);
};

type UseDeleteHandlerProps = {
    setLoading: (value: boolean) => void;
    id: string;
    onSuccess?: () => void;
};

export const useDeleteHandler = ({ setLoading, id, onSuccess }: UseDeleteHandlerProps) =>
    useCallback(async () => {
        try {
            await deleteFacility(id);

            setLoading(true);
            await mutate(`catalog${apiRoutes.facilitySearch}`);
            if (onSuccess) {
                onSuccess();
            }

            toast(<Notification type="success" imageType='delete' heading='Вы удалили объект!' description='Это действие нельзя отменить' />);
            setLoading(false);
        } catch (error) {
            toast(<Notification description={prepareMessage(error)} imageType="cross" type="error" />);
            setLoading(false);

            throw error;
        }
    }, [id, setLoading]);

type UseMenuItemsProps = {
    item: FacilityType;
    openEditModal: () => void;
    openInfoModal: () => void;
    openDeleteModal: () => void;
    hideDeleteModal: () => void;
    hidePopup: () => void;
};

export const useMenuItems = ({
    hidePopup,
    item,
    openEditModal,
    openInfoModal,
    openDeleteModal,
    hideDeleteModal,
}: UseMenuItemsProps) => {
    const [isLoading, setLoading] = useState(false);

    const deleteHandler = useDeleteHandler({ setLoading, id: item.id, onSuccess: hideDeleteModal });
    const toggleVisibilityHandler = useToggleVisibilityHandler({
        setLoading,
        id: item.id,
        initialHidden: item.hidden,
        onSuccess: hidePopup,
    });

    const isLogged = hasCookie('sportsmap_token');

    const menuItems = useMemo(() => {
        const items = [{ text: 'Подробнее', onClick: openInfoModal }];

        if (isLogged) {
            items.push(
                { text: item.hidden ? 'Открыть' : 'Скрыть', onClick: toggleVisibilityHandler },
                { text: 'Редактировать', onClick: openEditModal },
                { text: 'Удалить', onClick: openDeleteModal }
            );
        }

        return items;
    }, [isLogged, item.hidden, openDeleteModal, openInfoModal, openEditModal, toggleVisibilityHandler]);

    return { menuItems, isLoading, deleteHandler };
};
