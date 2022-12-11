import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './ObjAdded.module.css';

const ObjAdded = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.objAddedDiv}>
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
                            Объект успешно добавлен
                        </div>
                    </div>
                    <div className={styles.buttonDiv} onClick={onClose}>
                        <div className={styles.buttonDiv1}>Окей</div>
                    </div>
                </div>
                <Image
                    className={styles.modalImageIcon}
                    alt=""
                    src="../modal-image2.svg"
                />
            </div>
        </div>
    );
};

export default ObjAdded;
