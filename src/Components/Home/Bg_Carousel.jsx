"use client";
import React, { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";

// Dynamically Importing Images from `public/assets/`
const imagePaths = [
  "../../../1.webp",
  "../../../2.webp",
  "../../../3.webp",
  "../../../4.webp",
];

export function Bg_Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000); // 4 seconds interval for smooth transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      {imagePaths.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-500 opacity-60 blur-lg mix-blend-multiply"></div>

      {/* Hero Text */}
      
      <p className="font-bold lg:text-4xl w-fit mx-auto absolute xl:top-[25%] text-white z-10 brightness-200 font-Roboto tracking-wide text-3xl top-[30%] text-center md:left-[17%] lg:mx-20 md:top-[26%] lg:top-[25%] lg:left-[12%] xl:left-[14%] 2xl:left-[26%] xl:text-[2.8rem] drop-shadow-xl">
  Welcome to 
  <br className="lg:block" />
  <span className="font-Roboto relative  left-0 md:left-0 top-2 md:top-2 xl:top-4 font-extrabold w-fit animate-gradient">
    Kilakarai Bukhari Aalim Arabic College
  </span>
</p>

      <p className="font-bold lg:text-3xl w-fit   mx-auto absolute xl:top-[45%] text-white z-10 brightness-200 font-Roboto tracking-normal text-3xl top-[45%] left-[30%] md:left-[30%] md:top-[44%] lg:top-[45%] lg:left-[35%]  xl:left-[33%] 2xl:top-[42%] 2xl:left-[42%]  xl:text-[2.5rem]  ">Admissions  <br className="md:hidden" /><span className="font-Roboto relative left-3 md:left-0 top-2 md:top-0 font-bold w-fit  text-[#A02021]">Open 2025</span></p>
      {/* <span className="font-opensans font-bold lg:text-3xl w-fit   mx-auto absolute xl:top-[35%] xl:left-[40%] text-red-500 z-30 brightness-200 text-2xl  top-20 left-[37%] md:left-[45%] md:top-[33%] hidden">Open 2025</span>               */}
      <a href="https://forms.gle/DzfW7ZoZpsNYY4GAA" target="_blank" className="font-bold text-3xl  w-fit my-2  mx-auto absolute top-[55%]  left-[38%] text-white z-10 md:left-[45%] lg:left-[45%] md:top-[50%] lg:top-[52%] xl:top-[53%] xl:left-[44%] 2xl:left-[48%] xl:text-[3rem]"><ApplyNowButton/></a>
       </div>
  );
}

export default Bg_Carousel;
