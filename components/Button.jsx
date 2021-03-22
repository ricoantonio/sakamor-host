import React from "react";
import Link from "next/link";
import styles from "../styles/components/Button.module.css";

const Button = ({ onCllick, text, submit, color }) => {
  return (
    <button
      type={submit ? "submit" : ""}
      className={color === "white" ? styles.container_white : styles.container}
      onClick={onCllick}
    >
      {text}
    </button>
  );
};

export default Button;
