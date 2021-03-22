import React from "react";
import Link from "next/link";
import styles from "../styles/components/Submenu.module.css";

function Submenu({ href, img, title, subtitle }) {
  return (
    <Link href={href ? href : "/"}>
      <a>
        <div className={styles.submenu_container}>
          <div>
            <div className={styles.submenu_title}>{title}</div>
            <div>{subtitle}</div>
          </div>
          <div className={styles.submenu_right_container}>
            <img src={img} />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default Submenu;
