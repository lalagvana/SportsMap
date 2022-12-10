import styles from "./Component2.module.css";
import Image from "next/image";

const Component2 = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <Image
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
      />
      <div className={styles.textButtonDiv}>
        <div className={styles.textDiv}>
          <div className={styles.windowTitleDiv}>Готово!</div>
          <div className={styles.expositoryTextDiv}>
            Вы успешно подписаны на обновления
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>Окей</div>
        </div>
      </div>
      <Image
        className={styles.modalImageIcon}
        alt=""
        src="../modal-image7.svg"
      />
    </div>
  );
};

export default Component2;
