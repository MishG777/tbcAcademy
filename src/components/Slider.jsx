import React, { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Slider = ({ images }) => {
  const [currentImageInd, setCurrentImageInd] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageInd((prevSlide) => (prevSlide + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images]);

  const showPrevImage = () => {
    setCurrentImageInd(
      (currentIndex) => (currentIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setCurrentImageInd((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <div className={styles.sliderCont}>
      <div className={styles.flexedImages}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={styles.eachImage}
            style={{ translate: `${-100 * currentImageInd}%` }}
          />
        ))}
      </div>

      <button
        onClick={showNextImage}
        className={styles.imageBtn}
        style={{
          right: 0,
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <ChevronRight />
      </button>
      <button
        onClick={showPrevImage}
        className={styles.imageBtn}
        style={{
          left: 0,
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
        }}
      >
        <ChevronLeft />
      </button>
      <div className={styles.dotButtons}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageInd(index)}
            className={index === currentImageInd ? styles.active : ""}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
