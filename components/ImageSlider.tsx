"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "/Page 9.png",
    "/Page 10.png",
    "/Page 11.png",
    "/Page 12.png",
    "/Page 13.png",
    "/Page 14.png",
    "/Page 15.png",
    "/Page 16.png",
    "/Page 17.png",
    "/Page 18.png",
    "/Page 19.png",
    "/Page 20.png",
  ];

  const slides: any[] = images.map((src, index) => (
    <div key={index}>
      <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto" />
    </div>
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>{slides}</Slider>
    </div>
  );
};

export default ImageSlider;
