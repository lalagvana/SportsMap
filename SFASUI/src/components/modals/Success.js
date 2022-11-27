import styles from "./Success.module.css";

const Success = ({ onClose }) => {
  return (
    <div className={styles.successDiv}>
      <img
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
        onClick={onClose}
      />
      <div className={styles.textButtonDiv}>
        <div className={styles.textDiv}>
          <div className={styles.windowTitleDiv}>Готово!</div>
          <div className={styles.expositoryTextDiv}>
            Мы постараемся ответить вам как можно скорее
          </div>
        </div>
        <div className={styles.buttonDiv} onClick={onClose}>
          <div className={styles.buttonDiv1}>Окей</div>
        </div>
      </div>
      <img className={styles.modalImageIcon} alt="" src="../modal-image.svg" />
    </div>
  );
};

export default Success;
