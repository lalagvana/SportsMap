import { PropsWithChildren } from 'react';

import { useIcon } from './TextWithIcon.hooks';

import styles from './TextWithIcon.module.css';

type TextWithIcon = PropsWithChildren<{
    iconType: string;
    className?: string;
    width?: number;
    height?: number;
}>;

export const TextWithIcon = ({ iconType, children, className, width = 20, height = 20 }: TextWithIcon) => {
    const icon = useIcon({ iconType, width, height });
    return (
        <div className={[styles['TextWithIcon'], className].join(' ')}>
            <div className={styles['TextWithIcon-IconContainer']}>{icon}</div>
            {children}
        </div>
    );
};
