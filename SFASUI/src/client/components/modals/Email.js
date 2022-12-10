import { useState, useCallback } from "react";
import Success from "../components/Success";
import PortalPopup from "../components/PortalPopup";
import styles from "./Email.module.css";
import Image from "next/image";

const Email = ({ onClose }) => {
  const [isSuccessOpen, setSuccessOpen] = useState(false);

  const openSuccess = useCallback(() => {
    setSuccessOpen(true);
  }, []);

  const closeSuccess = useCallback(() => {
    setSuccessOpen(false);
  }, []);

  return (
    <>
      <div className={styles.emailDiv}>
        <div className={styles.emailDiv1}>
          <Image
            className={styles.claritycloseLineIcon}
            alt=""
            src="../claritycloseline.svg"
            onClick={onClose}
          />
          <div className={styles.div}>Отправить замечание или предложение</div>
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
                <Image
                  className={styles.iconStart}
                  alt=""
                  src="../iconstart26.svg"
                />
                <div className={styles.caretDiv} />
                <div className={styles.textDiv}>Введите ваше ФИО</div>
                <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
              </div>
              <div className={styles.lMessageDiv}>
                <Image
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
                <Image
                  className={styles.iconStart}
                  alt=""
                  src="../iconstart27.svg"
                />
                <div className={styles.caretDiv} />
                <div className={styles.textDiv}>
                  Введите адрес электронной почты или номер телефона
                </div>
                <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
              </div>
              <div className={styles.lMessageDiv}>
                <Image
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
                <Image
                  className={styles.iconStart}
                  alt=""
                  src="../iconstart28.svg"
                />
                <div className={styles.caretDiv} />
                <div className={styles.textDiv}>Введите текст</div>
                <Image className={styles.iconEnd} alt="" src="../iconend.svg" />
              </div>
              <div className={styles.lMessageDiv}>
                <Image
                  className={styles.iconMessage}
                  alt=""
                  src="../iconmessage20.svg"
                />
                <div className={styles.messageDiv}>Optional Message</div>
              </div>
            </div>
          </div>
          <textarea
            className={styles.cInputTextarea}
            placeholder="Введите текст"
            required
          />
          <div className={styles.buttonDiv}>
            <div className={styles.buttonDiv1} onClick={onClose}>
              <div className={styles.buttonDiv2}>Отменить</div>
            </div>
            <div className={styles.buttonDiv3} onClick={openSuccess}>
              <div className={styles.buttonDiv2}>Сохранить</div>
            </div>
          </div>
        </div>
      </div>
      {isSuccessOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSuccess}
        >
          <Success onClose={closeSuccess} />
        </PortalPopup>
      )}
    </>
  );
};

export default Email;
