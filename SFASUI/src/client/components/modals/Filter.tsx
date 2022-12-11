import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './Filter.module.css';

const Filter = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.filterDiv}>
            <div className={styles.filterDiv1}>
                <Image
                    className={styles.claritycloseLineIcon}
                    alt=""
                    src="../claritycloseline.svg"
                    onClick={onClose}
                />
                <div className={styles.buttonDiv}>
                    <div className={styles.buttonDiv1} onClick={onClose}>
                        <div className={styles.buttonDiv2}>Отменить</div>
                    </div>
                    <div className={styles.buttonDiv3} onClick={onClose}>
                        <div className={styles.buttonDiv2}>Фильтровать</div>
                    </div>
                </div>
                <div className={styles.div}>Фильтры</div>
                <div className={styles.inputStandardDiv}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Наименование</div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart21.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                Введите наименование
                            </div>
                            <Image
                                className={styles.iconEnd}
                                alt=""
                                src="../iconend.svg"
                            />
                        </div>
                        <div className={styles.lMessageDiv}>
                            <Image
                                className={styles.iconMessage}
                                alt=""
                                src="../iconmessage7.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.labelDiv1}>Тип</div>
                <div className={styles.cInputDiv1}>
                    <Image
                        className={styles.iconStart}
                        alt=""
                        src="../iconstart21.svg"
                    />
                    <div className={styles.caretDiv} />
                    <div className={styles.textDiv}>Выберите тип объекта</div>
                    <Image
                        className={styles.iconEnd1}
                        alt=""
                        src="../iconend18.svg"
                    />
                </div>
                <div className={styles.groupDiv}>
                    <div className={styles.labelDiv2}>Форма собственности</div>
                    <div className={styles.cInputDiv2}>
                        <Image
                            className={styles.iconStart}
                            alt=""
                            src="../iconstart23.svg"
                        />
                        <div className={styles.caretDiv} />
                        <div className={styles.textDiv}>Выберите</div>
                        <Image
                            className={styles.iconEnd1}
                            alt=""
                            src="../iconend18.svg"
                        />
                    </div>
                </div>
                <div className={styles.labelDiv3}>Тип покрытия</div>
                <div className={styles.cInputDiv3}>
                    <Image
                        className={styles.iconStart}
                        alt=""
                        src="../iconstart23.svg"
                    />
                    <div className={styles.caretDiv} />
                    <div className={styles.textDiv}>Выберите</div>
                    <Image
                        className={styles.iconEnd1}
                        alt=""
                        src="../iconend18.svg"
                    />
                </div>
                <div className={styles.groupDiv1}>
                    <div className={styles.labelDiv4}>Платные услуги</div>
                    <div className={styles.cInputDiv4}>
                        <Image
                            className={styles.iconStart}
                            alt=""
                            src="../iconstart25.svg"
                        />
                        <div className={styles.caretDiv} />
                        <div className={styles.textDiv}>Выберите</div>
                        <Image
                            className={styles.iconEnd1}
                            alt=""
                            src="../iconend21.svg"
                        />
                    </div>
                </div>
                <div className={styles.groupDiv2}>
                    <div className={styles.lLabelDiv1}>
                        <div className={styles.labelDiv}>“Доступная среда”</div>
                        <div className={styles.hintDiv}>Optional Hint</div>
                    </div>
                    <Image
                        className={styles.togglerIcon}
                        alt=""
                        src="../toggler1.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;
