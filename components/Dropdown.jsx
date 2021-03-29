import React from "react";
import Link from "next/link";
import styles from "../styles/components/Dropdown.module.css";

const Dropdown = ({ options = [], onChange, value }) => {
  const default_ = value
    ? { namaFile: value, value }
    : { namaFile: "SELECT", value: "" };
  return (
    <select className={styles.container} onChange={(e) => onChange(e)}>
      {[default_, ...options].map(
        (opt, index) =>
          opt && (
            <option key={index} value={opt.value}>
              {opt.namaFile}
            </option>
          )
      )}
    </select>
  );
};

export default Dropdown;
