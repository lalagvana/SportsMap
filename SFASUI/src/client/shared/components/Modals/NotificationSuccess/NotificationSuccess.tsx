import Image from 'next/image';

import { ModalProps } from 'src/client/shared/types/modals';

import styles from './NotificationSuccess.module.css';

export const NotificationSuccess = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.successDiv}>
            <div className={styles.successDiv1}>
                <Image className={styles.claritycloseLineIcon} alt="" src="../claritycloseline.svg" onClick={onClose} />
                <div className={styles.textButtonDiv}>
                    <div className={styles.textDiv}>
                        <div className={styles.windowTitleDiv}>Готово!</div>
                        <div className={styles.expositoryTextDiv}>Вы успешно подписаны на обновления</div>
                    </div>
                    <div className={styles.buttonDiv} onClick={onClose}>
                        <div className={styles.buttonDiv1}>Окей</div>
                    </div>
                </div>
                <Image className={styles.modalImageIcon} alt="" src="../modal-image5.svg" />
            </div>
        </div>
    );
};
