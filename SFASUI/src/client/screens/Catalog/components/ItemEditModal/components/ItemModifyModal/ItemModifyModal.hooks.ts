import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { partialUpdateFacility } from "src/client/shared/utils/api/facilities";
import { mutate } from "swr";
import { omit } from "lodash";
import { apiRoutes } from "../../../../../../shared/utils/api/apiRoutes";

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

                await mutate(apiRoutes.facilitySearch);
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
