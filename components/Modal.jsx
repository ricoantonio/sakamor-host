import React from "react";
import Link from "next/link";
import styles from "../styles/components/Modal.module.css";

import Router from "next/router";

const Modal = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};

export default Modal;
