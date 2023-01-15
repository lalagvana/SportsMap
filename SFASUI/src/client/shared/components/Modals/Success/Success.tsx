import Image from 'next/image';

import { ModalProps } from 'src/client/shared/types/modals';

import styles from './Success.module.css';

export const Success = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.successDiv}>
            <Image
                className={styles.claritycloseLineIcon}
                alt=""
                src="../claritycloseline.svg"
                onClick={onClose}
            />
            <div className={styles.textButtonDiv}>
                <div className={styles.textDiv}>
                    <div className={styles.windowTitleDiv}>Готово!</div>
                    <div className={styles.expositoryTextDiv}>
                        Мы постараемся ответить вам как можно скорее
                    </div>
                </div>
                <div className={styles.buttonDiv} onClick={onClose}>
                    <div className={styles.buttonDiv1}>Окей</div>
                </div>
            </div>
            <Image
                className={styles.modalImageIcon}
                alt=""
                src="../modal-image.svg"
            />
        </div>
    );
};
