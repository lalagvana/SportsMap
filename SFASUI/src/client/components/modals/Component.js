import styles from "./Component.module.css";
import Image from "next/image";
const Component = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <Image
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
      />
      <div className={styles.textButtonDiv}>
        <div className={styles.textDiv}>
          <div className={styles.div1}>
            К сожалению, эта функция не поддерживается
          </div>
          <div className={styles.expositoryTextDiv}>Something went wrng.</div>
        </div>
        <div className={styles.div2}>Но мы уже работаем над этим!</div>
      </div>
      <div className={styles.buttonDiv}>
        <div className={styles.buttonDiv1}>Окей</div>
      </div>
      <Image
        className={styles.modalImageIcon}
        alt=""
        src="../modal-image6.svg"
      />
    </div>
  );
};

export default Component;
