import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './Error1.module.css';

const Error1 = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.errorDiv}>
            <div className={styles.notificationDiv}>
                <div className={styles.informerBGDiv} />
                <Image
                    className={styles.claritycloseLineIcon}
                    alt=""
                    src="../claritycloseline.svg"
                    onClick={onClose}
                />
                <Image className={styles.icon} alt="" src="../icon.svg" />
                <b className={styles.errorB}>Ошибка</b>
                <div className={styles.errorTextDiv}>Error text</div>
                <div className={styles.informerLineDiv} />
            </div>
        </div>
    );
};

export default Error1;
