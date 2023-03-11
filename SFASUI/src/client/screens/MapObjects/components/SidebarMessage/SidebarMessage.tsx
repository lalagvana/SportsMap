import Image from 'next/image';
import { ReactNode } from 'react';

import styles from './SidebarMessage.module.css';

type SidebarMessageProps = {
    title: string;
    message: string;
    imageUrl: string;
    titleClassName?: string;
    button?: ReactNode;
};

export const SidebarMessage = ({ title, message, imageUrl, titleClassName, button }: SidebarMessageProps) => {
    return (
        <section className={styles['SidebarMessage']}>
            <div className={styles['SidebarMessage-Image']}>
                <Image src={imageUrl} width={83} height={83} layout="fixed"/>
            </div>
            <div className={styles['SidebarMessage-TextSection']}>
                <span className={[styles['SidebarMessage-Title'], titleClassName].join(' ')}>{title}</span>
                <span className={styles['SidebarMessage-Message']}>{message}</span>
                {button}
            </div>
        </section>
    );
};
