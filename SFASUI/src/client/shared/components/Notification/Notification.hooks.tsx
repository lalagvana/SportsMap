import { useMemo } from 'react';

import Cross from 'public/icons/notification/cross.svg';
import Notification from 'public/icons/notification/notification.svg';
import Add from 'public/icons/notification/add.svg';
import Delete from 'public/icons/notification/delete.svg';
import Ok from 'public/icons/notification/ok.svg';
import Hide from 'public/icons/notification/hide.svg';
import Mail from 'public/icons/notification/mail.svg';
import Open from 'public/icons/notification/open.svg';

import { ImageTypeOption } from "./Notification.types";

export const useNotificationIcon = (imageType?: ImageTypeOption) =>
    useMemo(() => {
        switch (imageType) {
            case 'cross':
                return <Cross width={30} height={30} />;
            case 'notification':
                return <Notification width={30} height={30} />;
            case 'add':
                return <Add width={30} height={30} />;
            case 'delete':
                return <Delete width={30} height={30} />;
            case 'hide':
                return <Hide width={30} height={30} />;
            case 'mail':
                return <Mail width={30} height={30} />;
            case 'open':
                return <Open width={30} height={30} />;
            default:
                return <Ok width={30} height={30} />;
        }
    }, [imageType]);
