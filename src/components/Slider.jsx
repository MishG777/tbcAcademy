import React, { useState, useEffect } from "react";
import styles from "../styles/Slider.module.css";

import next from "../assets/next.png";
import prev from "../assets/prev.png";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides && slides.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [slides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slides || slides.length === 0) {
    return <p>No slides available.</p>;
  }

  return (
    <div className={styles.slider}>
      <div
        className={`${styles.slidesContainer} ${
          currentSlide === 0 ? "" : styles.animateSlide
        }`}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className={styles.navigation}>
        <img
          src={prev}
          alt="prev button"
          onClick={() =>
            goToSlide((currentSlide - 1 + slides.length) % slides.length)
          }
        />
        <img
          src={next}
          alt="next button"
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        />
      </div>
    </div>
  );
};

export default Slider;
