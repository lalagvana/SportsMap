import Image from 'next/image';

import { ModalProps } from 'src/client/shared/types/modals';

import styles from './Error.module.css';

export const Error = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.errorDiv}>
            <div className={styles.notificationDiv}>
                <div className={styles.informerBGDiv} />
                <Image className={styles.claritycloseLineIcon} alt="" src="../claritycloseline.svg" onClick={onClose} />
                <Image className={styles.icon} alt="" src="../icon.svg" />
                <b className={styles.errorB}>Ошибка</b>
                <div className={styles.errorTextDiv}>Error text</div>
                <div className={styles.informerLineDiv} />
            </div>
        </div>
    );
};
