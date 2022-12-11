import { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { ModalProps } from 'client/components/modals/types';

import styles from './Component1.module.css';

const Component1 = ({ onClose }: ModalProps) => {
    const { push } = useRouter();

    const onButtonContainer1Click = useCallback(async () => {
        await push('/');
    }, [push]);

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
                    <div className={styles.div1}>
                        Вы уверены, что хотите выйти?
                    </div>
                </div>
                <div className={styles.buttonDiv}>
                    <div className={styles.buttonDiv1}>
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
    );
};

export default Component1;
