import { useCallback, useMemo, useState } from 'react';
import { FacilityType } from '../../../../../../shared/types/facilities';
import { deleteFacility, partialUpdateFacility } from '../../../../../../shared/utils/api/facilities';
import { toast } from 'react-toastify';
import { prepareMessage } from '../../../../../../shared/utils/notifications';
import { mutate } from 'swr';
import { apiRoutes } from '../../../../../../shared/utils/api/apiRoutes';
import { hasCookie } from 'cookies-next';

type UseToggleVisibilityProps = {
    setLoading: (value: boolean) => void;
    id: string;
    initialHidden: boolean;
    onSuccess?: () => void;
};

export const useToggleVisibilityHandler = ({ setLoading, id, initialHidden, onSuccess }: UseToggleVisibilityProps) =>
    useCallback(async () => {
        try {
            await partialUpdateFacility(id, { hidden: !initialHidden });

            setLoading(true);
            await mutate(apiRoutes.facilitySearch);
            if (onSuccess) {
                onSuccess();
            }
            toast.success('Вы успешно изменили видимость объекта');
            setLoading(false);
        } catch (error) {
            toast.error(prepareMessage(error, 'Произошла ошибка во время попытки изменения видимости объекта'));
            setLoading(false);

            throw error;
        }
    }, [id, setLoading, initialHidden]);

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
            await mutate(apiRoutes.facilitySearch);
            if (onSuccess) {
                onSuccess();
            }

            toast.success('Вы успешно удалили объект');
            setLoading(false);
        } catch (error) {
            toast.error(prepareMessage(error, 'Произошла ошибка во время попытки удаления объекта'));
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
