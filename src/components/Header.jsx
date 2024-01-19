import React from "react";
import styles from "../styles/Header.module.css";
import svg from "../assets/logo.svg";

const Header = ({ pageHandler }) => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.innerHeader}>
        <a>
          <img src={svg} alt="tbc logo" />
        </a>

        <div className={styles.buttons}>
          <ul>
            <li onClick={() => pageHandler("page1")}>პარტნიორები</li>
            <li onClick={() => pageHandler("page2")}>
              ხშირად დასმული კითხვები
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
