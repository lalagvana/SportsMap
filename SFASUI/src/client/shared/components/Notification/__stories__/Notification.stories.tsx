import React from 'react';

import { Notification, NotificationProps } from '../Notification';

export default {
    title: 'Shared/Notification',
    component: Notification,
    argTypes: {
        type: {
            options: ['error', 'success'],
            control: { type: 'select' },
        },
        imageType: {
            options: ['mail', 'cross', 'check', 'notification', 'ok', 'hide', 'open', 'add', 'delete'],
            control: { type: 'select' },
        },
    },
};

export const playground = (props: NotificationProps) => {
    return <Notification {...props} />;
};

playground.args = {
    type: 'success',
    heading: 'Вы удалили объект!',
    description: 'Это действие нельзя отменить',
    imageType: 'delete',
};
