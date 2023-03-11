import { PropsWithChildren } from 'react';

import styles from './TextWithIcon.module.css';
import Image from 'next/image';

type TextWithIcon = PropsWithChildren<{
    iconUrl: string;
    className?: string;
}>;

export const TextWithIcon = ({ iconUrl, children, className }: TextWithIcon) => (
    <div className={[styles['TextWithIcon'], className].join(' ')}>
        <div className={styles['TextWithIcon-IconContainer']}>
            <Image width={20} height={20} src={iconUrl} layout="fixed" />
        </div>
        {children}
    </div>
);
