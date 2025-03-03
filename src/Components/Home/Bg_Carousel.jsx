"use client";
import React, { useEffect, useState } from "react";
import Image1 from "../../assets/Image_slider/1.webp";
import Image2 from "../../assets/Image_slider/2.webp";
import Image3 from "../../assets/Image_slider/3.webp";
import Image4 from "../../assets/Image_slider/4.webp";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";

const images = [Image1, Image2, Image3, Image4];

export function Bg_Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen 2xl:overflow-x-hidden">
      <img
        src={images[currentIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-500 opacity-45 mix-blend-multiply "></div>
      <p className="font-bold lg:text-4xl w-fit mx-auto absolute xl:top-[25%] text-white z-10 brightness-200 font-Roboto tracking-wide text-3xl top-[30%] text-center md:left-[17%] lg:mx-20 md:top-[20%] lg:top-[25%] lg:left-[12%] xl:left-[14%] 2xl:left-[26%] xl:text-[2.8rem] drop-shadow-xl">
  Welcome to 
  <br className="lg:block" />
  <span className="font-Roboto relative  left-0 md:left-0 top-2 md:top-2 xl:top-4 font-extrabold w-fit animate-gradient">
    Kilakarai Bukhari Aalim Arabic College
  </span>
</p>

      <p className="font-bold lg:text-3xl w-fit   mx-auto absolute xl:top-[42%] text-white z-10 brightness-200 font-Roboto tracking-normal text-3xl top-[45%] left-[30%] md:left-[30%] md:top-[34%] lg:top-[38%] lg:left-[35%]  xl:left-[33%] 2xl:top-[42%] 2xl:left-[42%]  xl:text-[2.5rem]  ">Admissions  <br className="md:hidden" /><span className="font-Roboto relative left-3 md:left-0 top-2 md:top-0 font-bold w-fit  text-[#A02021]">Open 2025</span></p>
      {/* <span className="font-opensans font-bold lg:text-3xl w-fit   mx-auto absolute xl:top-[35%] xl:left-[40%] text-red-500 z-30 brightness-200 text-2xl  top-20 left-[37%] md:left-[45%] md:top-[33%] hidden">Open 2025</span>               */}
      <a href="https://forms.gle/DzfW7ZoZpsNYY4GAA" target="_blank" className="font-bold text-3xl  w-fit my-2  mx-auto absolute top-[55%]  left-[38%] text-white z-10 md:left-[45%] lg:left-[45%] md:top-[40%] lg:top-[46%] xl:top-[49%] xl:left-[44%] 2xl:left-[48%] xl:text-[3rem]"><ApplyNowButton/></a>
    </div>
  );
}

export default Bg_Carousel;
