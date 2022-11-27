import styles from "./Component9.module.css";

const Component9 = ({ onClose }) => {
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
          <div className={styles.div1}>
            Мы постараемся ответить вам как можно скорее
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>Окей</div>
        </div>
      </div>
      <img className={styles.modalImageIcon} alt="" src="../modal-image.svg" />
    </div>
  );
};

export default Component9;
