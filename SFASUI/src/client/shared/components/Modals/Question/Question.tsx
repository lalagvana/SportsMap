import Image from 'next/image';

import styles from './Question.module.css';

export const Question = () => {
    return (
        <div className={styles.questionDiv}>
            <Image className={styles.claritycloseLineIcon} alt="" src="../claritycloseline.svg" />
            <div className={styles.textButtonDiv}>
                <div className={styles.textDiv}>
                    <div className={styles.windowTitleDiv}>Вы уверены, что хотите выйти?</div>
                    <div className={styles.expositoryTextDiv} />
                </div>
                <div className={styles.buttonDiv}>
                    <div className={styles.buttonDiv1}>
                        <div className={styles.buttonDiv2}>Нет</div>
                    </div>
                    <div className={styles.buttonDiv3}>
                        <div className={styles.buttonDiv2}>Да</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
