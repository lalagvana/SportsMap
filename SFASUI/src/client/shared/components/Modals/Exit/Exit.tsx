import { useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { ModalProps } from 'src/client/shared/types/modals';

import styles from './Exit.module.css';

export const Exit = ({ onClose }: ModalProps) => {
    const { push } = useRouter();

    const onButtonContainer1Click = useCallback(async () => {
        await push('/auth');
    }, [push]);

    return (
        <div className={styles.exitDiv}>
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
                            Вы уверены, что хотите выйти?
                        </div>
                        <div className={styles.expositoryTextDiv} />
                    </div>
                    <div className={styles.buttonDiv}>
                        <div className={styles.buttonDiv1} onClick={onClose}>
                            <div className={styles.buttonDiv2}>Нет</div>
                        </div>
                        <div
                            className={styles.buttonDiv3}
                            onClick={onButtonContainer1Click}
                        >
                            <div className={styles.buttonDiv2}>Да</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
