import { useCallback } from 'react';
import { toast } from 'react-toastify';

import { emailSubscribe } from 'src/client/shared/utils/api/emails';
import { Notification } from 'src/client/shared/components/Notification';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { FooterFields } from '.';

export const useSubscribeHandler = () => {
    return useCallback(async (fields: FooterFields) => {
        try {
            await emailSubscribe({ email: fields.email });

            toast(<Notification type="success" description="Вы подписались на обновления" />);
        } catch (e) {
            toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
        }
    }, []);
};
