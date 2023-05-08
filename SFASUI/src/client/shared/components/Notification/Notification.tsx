import { ToastProps } from 'react-toastify/dist/types';

import { useNotificationIcon } from './Notification.hooks';
import { ImageTypeOption } from './Notification.types';

import Close from 'public/icons/close.svg';

import styles from './Notification.module.css';

export type NotificationProps = Partial<ToastProps> & {
    imageType?: ImageTypeOption;
    heading?: string;
    description: string;
};

export const Notification = ({
    closeToast,
    type,
    imageType,
    heading: customHeading,
    description,
}: NotificationProps) => {
    const heading = customHeading || (type === 'error' ? 'Ошибка' : 'Готово!');

    const icon = useNotificationIcon(imageType);

    return (
        <article className={styles['Notification']}>
            <div className={styles['Notification-Close']} onClick={closeToast}>
                <Close width={14} height={14} />
            </div>

            <div
                className={[styles['Notification-ImageSection'], styles[`Notification-ImageSection_${type}`]].join(' ')}
            >
                {icon}
            </div>
            <div className={styles['Notification-TextSection']}>
                <span className={[styles['Notification-Heading'], styles[`Notification-Heading_${type}`]].join(' ')}>
                    {heading}
                </span>
                <p className={styles['Notification-Description']}>{description}</p>
            </div>
        </article>
    );
};
