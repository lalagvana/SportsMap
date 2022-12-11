import Image from 'next/image';

import { ModalProps } from 'client/components/modals/types';

import styles from './CurObj.module.css';

const CurObj = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.curObjDiv}>
            <div className={styles.currentObjDiv}>
                <Image
                    className={styles.claritycloseLineIcon}
                    alt=""
                    src="../claritycloseline.svg"
                    onClick={onClose}
                />
                <div className={styles.buttonDiv}>
                    <div className={styles.buttonDiv1}>
                        <div className={styles.buttonDiv2}>Окей!</div>
                    </div>
                </div>
                <Image
                    className={styles.uploadImageIcon}
                    alt=""
                    src="../upload-image.svg"
                />
                <div className={styles.div}>Спортивный объект</div>
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
                                src="../iconstart.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>Fitness House</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.lLabelDiv1}>
                    <div className={styles.hintDiv1}>Optional Hint</div>
                </div>
                <div className={styles.inputStandardDiv1}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Длина</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>500</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv2}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Ширина</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>500</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv3}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Высота</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>200</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv4}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Площадь</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>2500</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv5}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Размер</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>12x80</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv6}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Глубина</div>
                            <div className={styles.hintDiv}>Optional</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart1.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>м</div>
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
                                src="../iconmessage.svg"
                            />
                            <div className={styles.messageDiv}>
                                Optional Message
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv7}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Адрес</div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                Выборгская набережная
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
                <div className={styles.inputStandardDiv8}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Пользователь</div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>-</div>
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
                <div className={styles.inputStandardDiv9}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Режим работы</div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                ПН-ВС 8.00 - 22.00
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
                <div className={styles.inputStandardDiv10}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>Примечания</div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                Спортзал не подходит для занятий с детьми
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
                <div className={styles.inputStandardDiv11}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>ЕПС</div>
                            <div className={styles.hintDiv}>Необязательно</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>Введите ЕПС</div>
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
                <div className={styles.inputStandardDiv12}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>
                                Фактическая загруженность
                            </div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>Введите число</div>
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
                <div className={styles.inputStandardDiv13}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv14}>
                            <div className={styles.labelDiv}>
                                Ссылка на сайт
                            </div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv13}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                https://fitenss-house.ru
                            </div>
                            <Image
                                className={styles.iconEnd}
                                alt=""
                                src="../iconend.svg"
                            />
                        </div>
                        <div className={styles.lMessageDiv13}>
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
                <div className={styles.inputStandardDiv14}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>
                                Для кого объект
                            </div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>Взрослые 18-99</div>
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
                <div className={styles.inputStandardDiv15}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>
                                Годовая мощность
                            </div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>Введите число</div>
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
                <div className={styles.lLabelDiv17}>
                    <div className={styles.labelDiv}>“Доступная среда”</div>
                    <div className={styles.hintDiv}>Optional Hint</div>
                </div>
                <div className={styles.labelDiv17}>Тип</div>
                <div className={styles.cInputDiv16}>
                    <Image
                        className={styles.iconStart}
                        alt=""
                        src="../iconstart.svg"
                    />
                    <div className={styles.caretDiv} />
                    <div className={styles.textDiv}>Спортивный зал</div>
                </div>
                <div className={styles.groupDiv}>
                    <div className={styles.labelDiv18}>Форма собственности</div>
                    <div className={styles.cInputDiv17}>
                        <Image
                            className={styles.iconStart}
                            alt=""
                            src="../iconstart.svg"
                        />
                        <div className={styles.caretDiv} />
                        <div className={styles.textDiv}>Субъект РФ</div>
                    </div>
                </div>
                <div className={styles.groupDiv1}>
                    <div className={styles.labelDiv18}>Тип покрытия</div>
                    <div className={styles.cInputDiv18}>
                        <Image
                            className={styles.iconStart}
                            alt=""
                            src="../iconstart18.svg"
                        />
                        <div className={styles.caretDiv} />
                        <div className={styles.textDiv}>-</div>
                    </div>
                </div>
                <div className={styles.groupDiv2}>
                    <div className={styles.labelDiv18}>Платные услуги</div>
                    <div className={styles.cInputDiv19}>
                        <Image
                            className={styles.iconStart}
                            alt=""
                            src="../iconstart18.svg"
                        />
                        <div className={styles.caretDiv} />
                        <div className={styles.textDiv}>Только платные</div>
                    </div>
                </div>
                <div className={styles.inputStandardDiv16}>
                    <div className={styles.inputDiv}>
                        <div className={styles.lLabelDiv}>
                            <div className={styles.labelDiv}>
                                Номер телефона
                            </div>
                            <div className={styles.hintDiv}>Optional Hint</div>
                        </div>
                        <div className={styles.cInputDiv}>
                            <Image
                                className={styles.iconStart}
                                alt=""
                                src="../iconstart7.svg"
                            />
                            <div className={styles.caretDiv} />
                            <div className={styles.textDiv}>
                                +7 (953) 2222 - 222
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
                <Image
                    className={styles.togglerIcon}
                    alt=""
                    src="../toggler.svg"
                />
                <Image
                    className={styles.imagePlaceholderIcon}
                    alt=""
                    src="../imageplaceholder@2x.png"
                />
                <div className={styles.lLabelDiv19}>
                    <div className={styles.labelDiv}>Документ</div>
                    <div className={styles.hintDiv}>Optional Hint</div>
                </div>
                <div className={styles.documentDiv}>
                    <div className={styles.docDiv}>
                        <div className={styles.addPadding}>
                            <Image
                                className={styles.iconMessage}
                                alt=""
                                src="../icon-button.svg"
                            />
                        </div>
                        <div className={styles.documentdocxDiv}>
                            Document.docx
                        </div>
                    </div>
                    <div className={styles.closepaddingDiv}>
                        <Image
                            className={styles.iconMessage}
                            alt=""
                            src="../claritycloseline3.svg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurObj;
