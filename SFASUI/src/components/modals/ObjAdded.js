import styles from "./ObjAdded.module.css";

const ObjAdded = ({ onClose }) => {
  return (
    <div className={styles.objAddedDiv}>
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
              Объект успешно добавлен
            </div>
          </div>
          <div className={styles.buttonDiv} onClick={onClose}>
            <div className={styles.buttonDiv1}>Окей</div>
          </div>
        </div>
        <img
          className={styles.modalImageIcon}
          alt=""
          src="../modal-image2.svg"
        />
      </div>
    </div>
  );
};

export default ObjAdded;
