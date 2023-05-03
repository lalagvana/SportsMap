import { PropsWithChildren } from 'react';

import styles from './TextWithIcon.module.css';
import Image from 'next/image';

type TextWithIcon = PropsWithChildren<{
    iconUrl: string;
    className?: string;
    width?: number;
    height?: number;
}>;

export const TextWithIcon = ({ iconUrl, children, className, width = 20, height = 20 }: TextWithIcon) => (
    <div className={[styles['TextWithIcon'], className].join(' ')}>
        <div className={styles['TextWithIcon-IconContainer']}>
            <Image width={width} height={height} src={iconUrl} layout="fixed" />
        </div>
        {children}
    </div>
);
