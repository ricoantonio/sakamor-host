import React from "react";
import styles from "../styles/components/Card.module.css";

const Card = ({ children, style, shadow }) => {
  return (
    <div
      className={`${styles.container} ${shadow ? styles.shadow : ""}`}
      style={style ? style : {}}
    >
      {children}
    </div>
  );
};

export default Card;
