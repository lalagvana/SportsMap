import { useState, useCallback } from "react";
import Component4 from "../components/Component4";
import PortalPopup from "../components/PortalPopup";
import styles from "./Component6.module.css";
import Image from "next/image";

const Component6 = ({ onClose }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.div}>
        <Image
          className={styles.claritycloseLineIcon}
          alt=""
          src="../claritycloseline.svg"
        />
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>
            <div className={styles.buttonDiv2}>Отменить</div>
          </div>
          <div className={styles.buttonDiv3} onClick={openFrame}>
            <div className={styles.buttonDiv2}>Сохранить</div>
          </div>
        </div>
        <Image
          className={styles.uploadImageIcon}
          alt=""
          src="../upload-image1.svg"
        />
        <div className={styles.div1}>Спортивный объект</div>
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
              <div className={styles.textDiv}>Введите наименование</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.lLabelDiv1}>
          <div className={styles.hintDiv1}>Optional Hint</div>
        </div>
        <div className={styles.labelDiv1}>Загрузите изображение</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>м</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите адрес</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart37.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите данные</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage46.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart37.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите данные</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage46.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
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
                src="../iconstart37.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите примечания</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage48.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.lLabelDiv12}>
          <div className={styles.labelDiv}>Документ</div>
          <div className={styles.hintDiv}>Optional Hint</div>
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
                src="../iconstart40.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите ЕПС</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage48.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv12}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv}>
              <div className={styles.labelDiv}>Фактическая загруженность</div>
              <div className={styles.hintDiv}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <Image
                className={styles.iconStart}
                alt=""
                src="../iconstart40.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите число</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage48.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv13}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv}>
              <div className={styles.labelDiv}>Ссылка на сайт</div>
              <div className={styles.hintDiv}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <Image
                className={styles.iconStart}
                alt=""
                src="../iconstart30.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите ссылку</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage38.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv14}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv}>
              <div className={styles.labelDiv}>Для кого объект</div>
              <div className={styles.hintDiv}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <Image
                className={styles.iconStart}
                alt=""
                src="../iconstart40.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите возраст</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage48.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv15}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv}>
              <div className={styles.labelDiv}>Годовая мощность</div>
              <div className={styles.hintDiv}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <Image
                className={styles.iconStart}
                alt=""
                src="../iconstart40.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите число</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage48.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.lLabelDiv18}>
          <div className={styles.labelDiv}>“Доступная среда”</div>
          <div className={styles.hintDiv}>Optional Hint</div>
        </div>
        <div className={styles.labelDiv19}>Тип</div>
        <div className={styles.cInputDiv16}>
          <Image className={styles.iconStart} alt="" src="../iconstart21.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите тип объекта</div>
          <Image className={styles.iconEnd16} alt="" src="../iconend18.svg" />
        </div>
        <div className={styles.labelDiv20}>Форма собственности</div>
        <div className={styles.cInputDiv17}>
          <Image className={styles.iconStart} alt="" src="../iconstart21.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите</div>
          <Image className={styles.iconEnd16} alt="" src="../iconend18.svg" />
        </div>
        <div className={styles.labelDiv21}>Тип покрытия</div>
        <div className={styles.cInputDiv18}>
          <Image className={styles.iconStart} alt="" src="../iconstart21.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите</div>
          <Image className={styles.iconEnd16} alt="" src="../iconend18.svg" />
        </div>
        <div className={styles.labelDiv22}>Платные услуги</div>
        <div className={styles.cInputDiv19}>
          <Image className={styles.iconStart} alt="" src="../iconstart48.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите</div>
          <Image className={styles.iconEnd16} alt="" src="../iconend18.svg" />
        </div>
        <div className={styles.inputStandardDiv16}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv}>
              <div className={styles.labelDiv}>Номер телефона</div>
              <div className={styles.hintDiv}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <Image
                className={styles.iconStart}
                alt=""
                src="../iconstart37.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>+7 (---) --- ----</div>
              <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <Image
                className={styles.iconMessage}
                alt=""
                src="../iconmessage46.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <Image className={styles.togglerIcon} alt="" src="../toggler3.svg" />
        <div className={styles.documentDiv}>
          <div className={styles.docDiv}>
            <Image
              className={styles.addPadding}
              alt=""
              src="../add--padding.svg"
            />
            <div className={styles.documentdocxDiv}>Document.docx</div>
          </div>
          <Image
            className={styles.addPadding}
            alt=""
            src="../closepadding.svg"
          />
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Component4 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component6;
