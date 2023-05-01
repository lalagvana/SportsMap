import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { updateFacility } from "src/client/shared/utils/api/facilities";

type UseSubmitHandlerProps = {
    onSuccess?: () => void;
    id: string;
};

export const useSubmitHandler = ({ onSuccess, id }: UseSubmitHandlerProps) => {
    return useCallback(
        async (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => {
            try {
                await updateFacility(id, fields);

                formikHelpers.setSubmitting(true);

                toast.success('Вы успешно обновили объект');
                formikHelpers.setSubmitting(false);

                if (onSuccess) {
                    onSuccess();
                }
            } catch (error) {
                toast.error(prepareMessage(error, 'Произошла ошибка во время попытки обновления объекта'));
                formikHelpers.setSubmitting(false);

                throw error;
            }
        },
        [onSuccess, id]
    );
};
