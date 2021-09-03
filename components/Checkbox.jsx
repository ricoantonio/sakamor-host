import React from "react";
import styles from "../styles/components/Checkbox.module.css";

const Checkbox = ({ text, checked, color, onClick, disabled }) => {
  return (
    <label className={styles.container} onChange={onClick}>
      <input type="checkbox" checked={checked} disabled={disabled} />
      {text}
      <span
        className={
          color === "green"
            ? styles.checkmark_green
            : color === "yellow"
            ? styles.checkmark_yellow
            : styles.checkmark_green
        }
      ></span>
    </label>
  );
};

export default Checkbox;
