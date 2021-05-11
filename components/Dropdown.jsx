import React from "react";
import styles from "../styles/components/Dropdown.module.css";

const Dropdown = ({ options = [], onChange, value, type }) => {
  if (type === "POSM") {
    var default_ = value
      ? { program: value, value }
      : { program: "SELECT", value: {} };
  }
  return (
    <select className={styles.container} onChange={(e) => onChange(e)}>
      {[default_, ...options].map(
        (val, index) =>
          val && (
            <option key={index} value={val.value}>
              {type == "POSM" ? val.program : ""}
            </option>
          )
      )}
    </select>
  );
};

export default Dropdown;
