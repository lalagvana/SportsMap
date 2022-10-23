import { useState, useCallback } from "react";
import Component9 from "../components/Component9";
import PortalPopup from "../components/PortalPopup";
import styles from "./Component8.module.css";

const Component8 = ({ onClose }) => {
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
        <img
          className={styles.claritycloseLineIcon}
          alt=""
          src="../claritycloseline.svg"
        />
        <div className={styles.div1}>Отправить замечание или предложение</div>
        <div className={styles.lLabelDiv}>
          <div className={styles.hintDiv}>Optional Hint</div>
        </div>
        <div className={styles.inputStandardDiv}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv1}>
              <div className={styles.labelDiv}>ФИО</div>
              <div className={styles.hintDiv1}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <img
                className={styles.iconStart}
                alt=""
                src="../iconstart26.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите ваше ФИО</div>
              <img className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <img
                className={styles.iconMessage}
                alt=""
                src="../iconmessage7.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv1}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv1}>
              <div className={styles.labelDiv}>Как с вами связаться?</div>
              <div className={styles.hintDiv1}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv}>
              <img
                className={styles.iconStart}
                alt=""
                src="../iconstart27.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>
                Введите адрес электронной почты или номер телефона
              </div>
              <img className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <img
                className={styles.iconMessage}
                alt=""
                src="../iconmessage7.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.inputStandardDiv2}>
          <div className={styles.inputDiv}>
            <div className={styles.lLabelDiv1}>
              <div className={styles.labelDiv}>
                Введите ваше замечание или предложение
              </div>
              <div className={styles.hintDiv1}>Optional Hint</div>
            </div>
            <div className={styles.cInputDiv2}>
              <img
                className={styles.iconStart}
                alt=""
                src="../iconstart28.svg"
              />
              <div className={styles.caretDiv} />
              <div className={styles.textDiv}>Введите текст</div>
              <img className={styles.iconEnd} alt="" src="../iconend.svg" />
            </div>
            <div className={styles.lMessageDiv}>
              <img
                className={styles.iconMessage}
                alt=""
                src="../iconmessage20.svg"
              />
              <div className={styles.messageDiv}>Optional Message</div>
            </div>
          </div>
        </div>
        <div className={styles.cInputDiv3}>
          <img className={styles.iconStart} alt="" src="../iconstart95.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv3}>Введите текст</div>
          <img className={styles.iconEnd} alt="" src="../iconend87.svg" />
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>
            <div className={styles.buttonDiv2}>Отменить</div>
          </div>
          <div className={styles.buttonDiv3} onClick={openFrame}>
            <div className={styles.buttonDiv2}>Сохранить</div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Component9 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component8;
