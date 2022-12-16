import Image from 'next/image';

import { ModalProps } from 'src/client/shared/types/modals';

import styles from './Delete.module.css';

export const Delete = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.deleteDiv}>
            <div className={styles.deleteDiv1}>
                <Image
                    className={styles.modalImageIcon}
                    alt=""
                    src="../modal-image3.svg"
                />
                <Image
                    className={styles.claritycloseLineIcon}
                    alt=""
                    src="../claritycloseline.svg"
                    onClick={onClose}
                />
                <div className={styles.textButtonDiv}>
                    <div className={styles.textDiv}>
                        <div className={styles.windowTitleDiv}>
                            Удалить объект?
                        </div>
                        <div className={styles.expositoryTextDiv}>
                            Объект будет удален безвозвратно
                        </div>
                    </div>
                    <div className={styles.buttonDiv}>
                        <div className={styles.buttonDiv1} onClick={onClose}>
                            <div className={styles.buttonDiv2}>Отмена</div>
                        </div>
                        <div className={styles.buttonDiv3} onClick={onClose}>
                            <div className={styles.buttonDiv2}>Удалить</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
