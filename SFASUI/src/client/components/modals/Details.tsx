import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './Details.module.css';

const Details = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.detailsDiv}>
            <div className={styles.detailsDiv1}>
                <Image
                    className={styles.icArrowsLeftIcon}
                    alt=""
                    src="../icarrowsleft.svg"
                    onClick={onClose}
                />
                <Image
                    className={styles.imagePlaceholderIcon}
                    alt=""
                    src="../imageplaceholder@2x.png"
                />
                <div className={styles.lLabelDiv}>
                    <div className={styles.labelDiv}>Тип: Спортивный зал</div>
                    <div className={styles.hintDiv}>Optional Hint</div>
                </div>
                <div className={styles.labelDiv1}>Fitness House</div>
                <div className={styles.labelDiv2}>
                    Адрес: Выборгская набережная, д. 1, корп.1, лит. А-БВГД
                </div>
                <div className={styles.labelDiv3}>
                    Номер телефона: +7 (923) 1234 - 123
                </div>
                <div className={styles.labelDiv4}>
                    <span className={styles.labelTxtSpan}>
                        <span>{`Сайт: `}</span>
                        <span className={styles.httpsfitnessHouseruSpan}>
                            https://fitness-house.ru
                        </span>
                    </span>
                </div>
                <div className={styles.labelDiv5}>
                    Режим работы: ПН-ВС 8.00 - 22.00
                </div>
                <div className={styles.labelDiv6}>
                    Платные услуги: только платные
                </div>
                <div className={styles.labelDiv7}>“Доступная среда”:</div>
                <Image
                    className={styles.togglerIcon}
                    alt=""
                    src="../toggler2.svg"
                />
            </div>
        </div>
    );
};

export default Details;
