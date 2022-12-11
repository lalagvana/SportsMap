import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './Component9.module.css';

const Component9 = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.div}>
            <Image
                className={styles.claritycloseLineIcon}
                alt=""
                src="../claritycloseline.svg"
                onClick={onClose}
            />
            <div className={styles.textButtonDiv}>
                <div className={styles.textDiv}>
                    <div className={styles.windowTitleDiv}>Готово!</div>
                    <div className={styles.div1}>
                        Мы постараемся ответить вам как можно скорее
                    </div>
                </div>
                <div className={styles.buttonDiv}>
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

export default Component9;
