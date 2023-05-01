import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { createFacility } from 'src/client/shared/utils/api/facilities';

type UseSubmitHandlerProps = {
    onSuccess?: () => void;
};

export const useSubmitHandler = ({ onSuccess }: UseSubmitHandlerProps) => {
    return useCallback(
        async (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => {
            try {
                await createFacility(fields);

                formikHelpers.setSubmitting(true);

                toast.success('Вы успешно создали объект');
                formikHelpers.setSubmitting(false);

                if (onSuccess) {
                    onSuccess();
                }
            } catch (error) {
                toast.error(prepareMessage(error, 'Произошла ошибка во время попытки создания объекта'));
                formikHelpers.setSubmitting(false);

                throw error;
            }
        },
        [onSuccess]
    );
};
