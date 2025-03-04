import React, { useEffect, useState } from "react";
import Nav2 from "./Nav2";
import ApplyNowButton from "../ui/ApplyButton";

const imagePaths = [
  "../../../1.webp",
  "../../../2.webp",
  "../../../3.webp",
  "../../../4.webp",
];

function BgCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {imagePaths.map((img, index) => (
       <img
       key={index}
       src={img}
       alt={`Slide ${index}`}
       className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 blur-[2px] ${
         index === currentIndex ? "opacity-100" : "opacity-0"
       }`}
       loading="lazy"
     />
     
      ))}


      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-400 opacity-90  mix-blend-multiply"></div>


      <div className="absolute inset-0 font-opensans flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl lg:text-5xl font-bold drop-shadow-xl">
          Welcome to <br />
          <span className="text-white">Kilakarai Bukhari Aalim Arabic College</span>
        </h1>
        <p className="text-3xl font-opensans lg:text-4xl font-bold mt-4">
          Admissions <span className="text-red-500">Open 2025</span>
        </p>
        <a
          href="https://forms.gle/DzfW7ZoZpsNYY4GAA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6"
        >
          <ApplyNowButton />
        </a>
      </div>
    </div>
  );
}

export default BgCarousel;
