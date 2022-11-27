import styles from "./Success1.module.css";

const Success1 = ({ onClose }) => {
  return (
    <div className={styles.successDiv}>
      <div className={styles.successDiv1}>
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
              Вы успешно подписаны на обновления
            </div>
          </div>
          <div className={styles.buttonDiv} onClick={onClose}>
            <div className={styles.buttonDiv1}>Окей</div>
          </div>
        </div>
        <img
          className={styles.modalImageIcon}
          alt=""
          src="../modal-image5.svg"
        />
      </div>
    </div>
  );
};

export default Success1;
