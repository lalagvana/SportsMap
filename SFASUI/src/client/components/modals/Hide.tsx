import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './Hide.module.css';

const Hide = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.hideDiv}>
            <div className={styles.questionDiv}>
                <Image
                    className={styles.claritycloseLineIcon}
                    alt=""
                    src="../claritycloseline.svg"
                    onClick={onClose}
                />
                <div className={styles.textButtonDiv}>
                    <div className={styles.textDiv}>
                        <div className={styles.windowTitleDiv}>
                            Скрыть объект?
                        </div>
                        <div className={styles.expositoryTextDiv}>
                            Вы в любой момент сможете сделать его снова видимым
                        </div>
                    </div>
                    <div className={styles.buttonDiv}>
                        <div className={styles.buttonDiv1} onClick={onClose}>
                            <div className={styles.buttonDiv2}>Нет</div>
                        </div>
                        <div className={styles.buttonDiv3} onClick={onClose}>
                            <div className={styles.buttonDiv2}>Да</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hide;
