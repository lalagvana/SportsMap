import Success from "../components/Success";
import styles from "./EmailSucs.module.css";

const EmailSucs = ({ onClose }) => {
  return (
    <div className={styles.emailSucsDiv}>
      <Success />
    </div>
  );
};

export default EmailSucs;
