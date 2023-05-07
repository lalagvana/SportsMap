import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';
import { mutate } from 'swr';
import { omit } from 'lodash';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { partialUpdateFacility } from 'src/client/shared/utils/api/facilities';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { Notification } from 'src/client/shared/components/Notification';

type UseSubmitHandlerProps = {
    onSuccess?: () => void;
    id: string;
};

export const useSubmitHandler = ({ onSuccess, id }: UseSubmitHandlerProps) => {
    return useCallback(
        async (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => {
            try {
                formikHelpers.setSubmitting(true);

                await partialUpdateFacility(id, omit(fields, ['photo', 'id']));

                await mutate(`catalog${apiRoutes.facilitySearch}`);
                toast(
                    <Notification type="success" heading="Вы обновили объект" description="Данные успешно изменены" />
                );
                formikHelpers.setSubmitting(false);

                if (onSuccess) {
                    onSuccess();
                }
            } catch (error) {
                toast(<Notification type="error" imageType="cross" description={prepareMessage(error)} />);
                formikHelpers.setSubmitting(false);

                throw error;
            }
        },
        [onSuccess, id]
    );
};
