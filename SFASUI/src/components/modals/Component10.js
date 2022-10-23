import styles from "./Component10.module.css";

const Component10 = ({ onClose }) => {
  return (
    <div className={styles.div}>
      <img
        className={styles.claritycloseLineIcon}
        alt=""
        src="../claritycloseline.svg"
      />
      <div className={styles.buttonDiv}>
        <div className={styles.buttonDiv1}>
          <div className={styles.buttonDiv2}>Отменить</div>
        </div>
        <div className={styles.buttonDiv3}>
          <div className={styles.buttonDiv2}>Фильтровать</div>
        </div>
      </div>
      <div className={styles.div1}>Фильтры</div>
      <div className={styles.inputStandardDiv}>
        <div className={styles.inputDiv}>
          <div className={styles.lLabelDiv}>
            <div className={styles.labelDiv}>Наименование</div>
            <div className={styles.hintDiv}>Optional Hint</div>
          </div>
          <div className={styles.cInputDiv}>
            <img className={styles.iconStart} alt="" src="../iconstart21.svg" />
            <div className={styles.caretDiv} />
            <div className={styles.textDiv}>Введите наименование</div>
            <img className={styles.iconEnd} alt="" src="../iconend.svg" />
          </div>
          <div className={styles.lMessageDiv}>
            <img
              className={styles.iconMessage}
              alt=""
              src="../iconmessage7.svg"
            />
            <div className={styles.messageDiv}>Optional Message</div>
          </div>
        </div>
      </div>
      <div className={styles.labelDiv1}>Тип</div>
      <div className={styles.cInputDiv1}>
        <img className={styles.iconStart} alt="" src="../iconstart21.svg" />
        <div className={styles.caretDiv} />
        <div className={styles.textDiv}>Выберите тип объекта</div>
        <img className={styles.iconEnd1} alt="" src="../iconend18.svg" />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.labelDiv2}>Форма собственности</div>
        <div className={styles.cInputDiv2}>
          <img className={styles.iconStart} alt="" src="../iconstart23.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите</div>
          <img className={styles.iconEnd1} alt="" src="../iconend18.svg" />
        </div>
      </div>
      <div className={styles.labelDiv3}>Тип покрытия</div>
      <div className={styles.cInputDiv3}>
        <img className={styles.iconStart} alt="" src="../iconstart23.svg" />
        <div className={styles.caretDiv} />
        <div className={styles.textDiv}>Выберите</div>
        <img className={styles.iconEnd1} alt="" src="../iconend18.svg" />
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.labelDiv4}>Платные услуги</div>
        <div className={styles.cInputDiv4}>
          <img className={styles.iconStart} alt="" src="../iconstart25.svg" />
          <div className={styles.caretDiv} />
          <div className={styles.textDiv}>Выберите</div>
          <img className={styles.iconEnd1} alt="" src="../iconend21.svg" />
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.lLabelDiv1}>
          <div className={styles.labelDiv}>“Доступная среда”</div>
          <div className={styles.hintDiv}>Optional Hint</div>
        </div>
        <img className={styles.togglerIcon} alt="" src="../toggler1.svg" />
      </div>
    </div>
  );
};

export default Component10;
