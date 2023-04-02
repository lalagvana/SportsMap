import { ReactNode } from 'react';

import styles from './SidebarMessage.module.css';

type SidebarMessageProps = {
    title: string;
    message: string;
    titleClassName?: string;
    button?: ReactNode;
};

export const SidebarMessage = ({ title, message, titleClassName, button }: SidebarMessageProps) => {
    return (
        <section className={styles['SidebarMessage']}>
            <span className={[styles['SidebarMessage-Title'], titleClassName].join(' ')}>{title}</span>
            <span className={styles['SidebarMessage-Message']}>{message}</span>
            {button}
        </section>
    );
};
