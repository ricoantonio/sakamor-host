import React from "react";
import styles from "../styles/components/Card.module.css";

const Card = ({ children, style }) => {
  return (
    <div className={styles.container} style={style ? style : {}}>
      {children}
    </div>
  );
};

export default Card;
