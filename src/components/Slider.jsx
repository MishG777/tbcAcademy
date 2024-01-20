import React, { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css";

import next from "../assets/next.png";
import prev from "../assets/prev.png";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides && slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  const prevHandler = () => {
    setCurrentIndex(
      (currentSlide) => (currentSlide - 1 + slides.length) % slides.length
    );
  };

  const nextHandler = () => {
    setCurrentIndex((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <div className={styles.sliderCont}>
      <div className={styles.slider}>{slides[currentIndex].img}</div>

      {/*<div
        className={styles.slider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.title} className={styles.slide}>
            {slide.img}
          </div>
        ))}
      </div>*/}

      <img className={styles.leftArrow} src={prev} onClick={prevHandler} />
      <img className={styles.RightArrow} src={next} onClick={nextHandler} />
    </div>
  );
};

export default Slider;
