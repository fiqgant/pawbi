"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slides = () => {
  return (
    <div className="max-w-6xl mx-auto px-9 sm:px-6 carousel-container my-20">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows
        showStatus={false}
        swipeable
        emulateTouch
        interval={5000} // Set the interval between slides
      >
        {[...Array(18)].map((_, index) => (
          <div key={index}>
            <img
              src={`/images/slides/${index + 1}.webp`}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slides;
