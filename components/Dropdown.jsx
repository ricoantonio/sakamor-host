import React from "react";
import Link from "next/link";
import styles from "../styles/components/Dropdown.module.css";

const Dropdown = ({ options = [], onChange, value }) => {
  const default_ = value
    ? { namaFile: value, value }
    : { namaFile: "SELECT", value: {} };
  return (
    <select className={styles.container} onChange={(e) => onChange(e)}>
      {[default_, ...options].map(
        (val, index) =>
          val && (
            <option key={index} value={val.value}>
              {val.namaFile}
            </option>
          )
      )}
    </select>
  );
};

export default Dropdown;
