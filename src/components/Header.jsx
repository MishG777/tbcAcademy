import React from "react";
import styles from "../styles/Header.module.css";
import svg from "../assets/logo.svg";

const Header = ({ pageHandler, page }) => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.innerHeader}>
        <a onClick={() => pageHandler("page1")}>
          <img src={svg} alt="tbc logo" />
        </a>

        <div className={styles.buttons}>
          <ul>
            <li
              onClick={() => pageHandler("page1")}
              className={page === "page1" ? styles.active : ""}
            >
              პარტნიორები
            </li>
            <li
              onClick={() => pageHandler("page2")}
              className={page === "page2" ? styles.active : ""}
            >
              ხშირად დასმული კითხვები
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
