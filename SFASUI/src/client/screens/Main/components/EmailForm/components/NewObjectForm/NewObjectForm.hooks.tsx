import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { Notification } from 'src/client/shared/components/Notification';
import { emailNewObject } from 'src/client/shared/utils/api/emails';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { createNewObject } from './NewObjectForm.helpers';
import { NewObjectFormFields } from './NewObjectForm.types';

export const useHandleSubmit = () =>
    useCallback(async (fields: NewObjectFormFields) => {
        try {
            await emailNewObject(createNewObject(fields));

            toast(<Notification type="success" description="Мы обязательно рассмотрим ваше предложение" />);
        } catch (e) {
            toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
        }
    }, []);
