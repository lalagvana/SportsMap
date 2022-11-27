import styles from "./Component4.module.css";

const Component4 = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
      />
      <div className={styles.textButtonDiv}>
        <div className={styles.textDiv}>
          <div className={styles.windowTitleDiv}>Готово!</div>
          <div className={styles.expositoryTextDiv}>
            Объект успешно добавлен
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>Окей</div>
        </div>
      </div>
      <img className={styles.modalImageIcon} alt="" src="../modal-image9.svg" />
    </div>
  );
};

export default Component4;
