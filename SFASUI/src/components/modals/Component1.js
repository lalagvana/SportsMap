import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component1.module.css";

const Component1 = ({ onClose }) => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
      />
      <div className={styles.textButtonDiv}>
        <div className={styles.textDiv}>
          <div className={styles.div1}>Вы уверены, что хотите выйти?</div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.buttonDiv1}>
            <div className={styles.buttonDiv2}>Нет</div>
          </div>
          <div className={styles.buttonDiv3} onClick={onButtonContainer1Click}>
            <div className={styles.buttonDiv2}>Да</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
