import React from "react";
import eye from "../assets/eyes.jpg";
import rain from "../assets/rain.jpg";
import ship from "../assets/ship.jpg";

import Slider from "./Slider";

const Partners = () => {
  const slides = [
    <img key="1" src={eye} alt="Slide 1" />,
    <img key="2" src={ship} alt="Slide 2" />,
    <img key="3" src={rain} alt="Slide 3" />,
    // Add more slides as needed
  ];

  return (
    <>
      <Slider slides={slides} />
    </>
  );
};

export default Partners;
