import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';
import { mutate } from 'swr';
import { omit } from 'lodash';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { createFacility } from 'src/client/shared/utils/api/facilities';
import { apiRoutes } from '../../../../../../shared/utils/api/apiRoutes';

type UseSubmitHandlerProps = {
    onSuccess?: () => void;
};

export const useSubmitHandler = ({ onSuccess }: UseSubmitHandlerProps) => {
    return useCallback(
        async (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => {
            try {
                await createFacility(omit(fields, 'photo'));

                formikHelpers.setSubmitting(true);

                toast.success('Вы успешно создали объект');
                formikHelpers.setSubmitting(false);
                await mutate(apiRoutes.facilitySearch);

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
