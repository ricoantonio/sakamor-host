import React from "react";
import Link from "next/link";
import styles from "../styles/components/Dropdown.module.css";

const Dropdown = ({ options = [], onChange, value, type }) => {
  const default_ =
    type === "POSM"
      ? { program: "SELECT", value }
      : type === "JENIS_CHANNEL"
      ? { program: "SELECT", value }
      : { program: "SELECT", value: {} };
  return (
    <select className={styles.container} onChange={(e) => onChange(e)}>
      {[default_, ...options].map(
        (val, index) =>
          val && (
            <option key={index} value={val.value}>
              {type == "POSM"
                ? val.program
                : type == "JENIS_CHANNEL"
                ? val.program
                : ""}
            </option>
          )
      )}
    </select>
  );
};

export default Dropdown;
