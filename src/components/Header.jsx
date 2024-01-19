import React from "react";
import styles from "../styles/Header.module.css";
import svg from "../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.innerHeader}>
        <a>
          <img src={svg} alt="tbc logo" />
        </a>

        <div className={styles.buttons}>
          <ul>
            <li>პარტნიორები</li>
            <li>ხშირად დასმული კითხვები</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
