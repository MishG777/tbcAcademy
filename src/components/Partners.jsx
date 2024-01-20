import React from "react";
import eye from "../assets/eyes.jpg";
import rain from "../assets/rain.jpg";
import ship from "../assets/ship.jpg";
import styles from "../styles/Partner.module.css";

import Slider from "./Slider";

const Partners = () => {
  const slides = [
    { img: <img src={rain} />, title: "rain" },
    { img: <img src={eye} />, title: "eye" },
    { img: <img src={ship} />, title: "ship" },
  ];

  return (
    <div className={styles.mainSlider}>
      <Slider slides={slides} />
    </div>
  );
};

export default Partners;
