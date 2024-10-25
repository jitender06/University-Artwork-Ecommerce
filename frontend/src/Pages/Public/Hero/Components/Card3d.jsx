import React, { useState, useEffect } from "react";
import dig16 from '../../../../assets/Digitalart/dig16.jpg';
import dra15 from '../../../../assets/Drawings/dra15.JPG';
import pain5 from '../../../../assets/Paintings/pain5.jpg' 
import { NavLink } from "react-router-dom";


const Card3d = () => {
  const slides = [
    {
      title: "Professor Sangita Srivastava Vice-Chancellor of the University of Allahabad",
      img: dig16,
      bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg",
    },
    {
      title: "Lord Ganesha",
      img: dra15,
      bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_spirited.jpg",
    },
    {
      title: "Taylor swift",
      img: pain5,
      bg: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg",
    },
  ];

  const range = 40;

  const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

  useEffect(() => {
    const handleMouseMove = ({ x, y }) => {
      const yValue = calcValue(y, window.innerHeight);
      const xValue = calcValue(x, window.innerWidth);

      document.querySelector(".cards").style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

      const images = document.querySelectorAll(".card__img");
      const backgrounds = document.querySelectorAll(".card__bg");

      images.forEach((image) => {
        image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
      });

      backgrounds.forEach((background) => {
        background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#222]">

      <div className="cards flex-col bg-white rounded-3xl p-7 shadow-xl flex transform rotate-x-11 rotate-y-[16.5deg] perspective-[1800px]">
        <div>
          <h3 className="text-pink-600 text-lg mb-2 transform translate-z-6">Must check it out</h3>
          <h1 className="text-gray-900 text-3xl font-extrabold mb-7 transform translate-z-9">Popular Artworks</h1>
        </div>
        <div className="flex">
          {slides.map((slide, index) => (
            <NavLink to='/painting'>
              <div
                key={index}
                className={`card relative rounded-xl shadow-lg w-54 h-74 mx-3 overflow-hidden perspective-[1200px] transform translate-z-[35px] transition-transform duration-200 ease-out ${index !== slides.length - 1 && "mr-7"
                  }`}
              >
                <div
                  className="card__bg absolute top-[-50px] left-[-50px] right-[-50px] bottom-[-50px] bg-cover bg-center z-0"
                  style={{ backgroundImage: `url(${slide.bg})`, transform: 'translateZ(-50px)' }}
                ></div>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="card__img relative h-80 z-10 object-cover"
                />
                <div className="card__text absolute bottom-0 w-full h-16 flex items-center justify-center bg-gradient-to-b from-transparent to-black text-white z-20">
                  <p className="text-sm font-bold">{slide.title}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card3d;
