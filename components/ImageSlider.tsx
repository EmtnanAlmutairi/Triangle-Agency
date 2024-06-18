import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import XIcon from './icons'; // Adjust the path as per your project structure
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

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

  const slides = images.map((src, index) => (
    <div key={index} onClick={() => openModal(src)}>
      <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto cursor-pointer" />
    </div>
  ));

  const openModal = (src: string) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Slider {...settings}>{slides}</Slider>
      <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Image Modal" className="flex items-center justify-center">
        <div className="relative">
          <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 bg-gray-800 text-white p-2 rounded">
            <XIcon className="h-6 w-6" /> {/* Adjust size as needed */}
          </button>
          <img src={currentImage} alt="Enlarged view" className="max-w-full max-h-full" />
        </div>
      </Modal>
    </div>
  );
};

export default ImageSlider;
