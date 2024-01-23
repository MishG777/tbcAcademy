import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import svg from "../assets/logo.svg";

import { Menu, X } from "lucide-react";

const Header = ({ pageHandler, page }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

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

            <div className={styles.burgerDiv}>
              <Menu onClick={toggleMenuHandler} className={styles.burger} />
            </div>
          </ul>
        </div>
      </div>
      {toggleMenu && (
        <div className={styles.movingContainer}>
          <div className={styles.closeDiv}>
            {toggleMenu ? (
              <X className={styles.x} onClick={toggleMenuHandler} />
            ) : (
              <Menu onClick={toggleMenuHandler} className={styles.burger} />
            )}

            <ul>
              <li
                onClick={() => {
                  pageHandler("page1");
                  toggleMenuHandler();
                }}
                className={page === "page1" ? styles.active : ""}
              >
                პარტნიორები
              </li>
              <li
                onClick={() => {
                  pageHandler("page2");
                  toggleMenuHandler();
                }}
                className={page === "page2" ? styles.active : ""}
              >
                ხშირად დასმული კითხვები
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
