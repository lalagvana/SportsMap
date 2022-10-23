import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Exit.module.css";

const Exit = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/auth");
  }, [navigate]);

  return (
    <div className={styles.exitDiv}>
      <div className={styles.questionDiv}>
        <img
          className={styles.claritycloseLineIcon}
          alt=""
          src="../claritycloseline.svg"
          onClick={onClose}
        />
        <div className={styles.textButtonDiv}>
          <div className={styles.textDiv}>
            <div className={styles.windowTitleDiv}>
              Вы уверены, что хотите выйти?
            </div>
            <div className={styles.expositoryTextDiv} />
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.buttonDiv1} onClick={onClose}>
              <div className={styles.buttonDiv2}>Нет</div>
            </div>
            <div
              className={styles.buttonDiv3}
              onClick={onButtonContainer1Click}
            >
              <div className={styles.buttonDiv2}>Да</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exit;
