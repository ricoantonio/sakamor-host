import React from "react";
import styles from "../styles/components/Dropdown.module.css";

const Dropdown = ({ options = [], onChange, value, type }) => {
  if (type === "POSM") {
    var default_ = value
      ? { program: value, value }
      : { program: "SELECT TYPE", value: {} };
  } else if (type === "BRAND") {
    var default_ = value
      ? { namaBrand: value, value }
      : { namaBrand: "SELECT BRAND", value: {} };
  }
  return (
    <select className={styles.container} onChange={(e) => onChange(e)}>
      {[default_, ...options].map(
        (val, index) =>
          val && (
            <option key={index} value={val.value}>
              {type == "POSM"
                ? val.program
                : type === "BRAND"
                ? val.namaBrand
                : type === "NILAI_WORKVISIT"
                ? val
                : val}
            </option>
          )
      )}
    </select>
  );
};

export default Dropdown;
