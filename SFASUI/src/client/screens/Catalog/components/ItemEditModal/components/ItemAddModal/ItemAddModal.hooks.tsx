import React, { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';
import { mutate } from 'swr';
import { omit } from 'lodash';

import { FacilityType } from 'src/client/shared/types/facilities';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { createFacility } from 'src/client/shared/utils/api/facilities';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { Notification } from 'src/client/shared/components/Notification';

type UseSubmitHandlerProps = {
    onSuccess?: () => void;
};

export const useSubmitHandler = ({ onSuccess }: UseSubmitHandlerProps) => {
    return useCallback(
        async (fields: FacilityType, formikHelpers: FormikHelpers<FacilityType>) => {
            try {
                await createFacility(omit(fields, 'photo'));

                formikHelpers.setSubmitting(true);

                toast(
                    <Notification
                        type="success"
                        imageType="add"
                        heading="Вы создали объект"
                        description="Теперь он появится в каталоге"
                    />
                );
                formikHelpers.setSubmitting(false);
                await mutate(`catalog${apiRoutes.facilitySearch}`);

                if (onSuccess) {
                    onSuccess();
                }
            } catch (error) {
                toast(<Notification type="error" imageType="cross" description={prepareMessage(error)} />);
                formikHelpers.setSubmitting(false);

                throw error;
            }
        },
        [onSuccess]
    );
};
