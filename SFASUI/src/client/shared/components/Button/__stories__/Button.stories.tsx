import React from 'react';

import { Button, ButtonProps } from '../Button';
import { ButtonType } from '../Button.types';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {
        view: {
            options: ButtonType,
            control: { type: 'select' },
        },
    },
};

export const playground = ({ view, text }: Pick<ButtonProps, 'view' | 'text'>) => {
    return <Button text={text} view={view} />;
};

playground.args = {
    view: ButtonType.Active,
    text: 'Нажми меня',
};
