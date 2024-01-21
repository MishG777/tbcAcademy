import React from "react";
import animal from "../assets/animal.jpg";
import biker from "../assets/biker.jpg";
import planet from "../assets/planet.jpg";
import styles from "../styles/Partner.module.css";

import Slider from "./Slider";

const IMAGES = [planet, animal, biker];

const Partners = () => {
  return (
    <div className={styles.mainSlider}>
      <Slider images={IMAGES} />
    </div>
  );
};

export default Partners;
