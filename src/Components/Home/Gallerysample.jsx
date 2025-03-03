import React, { useEffect, useRef, useState } from "react";

import i1 from "../../assets/Gallery Pics/1.webp";
import i2 from "../../assets/Gallery Pics/2.webp";
import i3 from "../../assets/Gallery Pics/3.webp";
import i4 from "../../assets/Gallery Pics/4.webp";
import i5 from "../../assets/Gallery Pics/5.webp";
import i6 from "../../assets/Gallery Pics/6.webp";
import i7 from "../../assets/Gallery Pics/7.webp";
import i8 from "../../assets/Gallery Pics/8.webp";
import i9 from "../../assets/Gallery Pics/9.webp";
import i10 from "../../assets/Gallery Pics/10.webp";
import i11 from "../../assets/Gallery Pics/11.webp";
import i12 from "../../assets/Gallery Pics/12.webp";
import i13 from "../../assets/Gallery Pics/13.webp";
import i14 from "../../assets/Gallery Pics/14.webp";

function Gallerysample() {
  const images = [i1, i2, i3, i4, i5, i6,i7,i8,i9,i10,i11,i12,i13,i14];
  const scrollContainerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(false);
  const scrollInterval = 3000; // Interval of 3 seconds
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let intervalId;

    if (autoScroll) {
      intervalId = setInterval(() => {
        if (scrollContainer) {
          const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if (scrollContainer.scrollLeft >= maxScrollLeft) {
            scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
          }
        }
      }, scrollInterval);
    }

    return () => clearInterval(intervalId);
  }, [autoScroll]);

  const handleDoubleClick = () => {
    setAutoScroll(!autoScroll);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <> 
      <div className="relative w-fit my-5 md:my-0 mx-auto">
        <h1 className="absolute text-2xl lg:text-3xl sm:text-lg font-Roboto font-bold text-blue-950 top-4 -left-3 md:top-6 md:left-[12%] lg:-left-0">
          Gallery
        </h1>
        <h1 className="relative flex flex-col gap-2 text-xl lg:text-2xl text-center sm:text-lg xl:text-[1.4rem] font-bold font-Roboto text-white sm:px-4 sm:py-2">
          <span className="text-gray-900 opacity-10 uppercase">Visit</span>
          <span className="text-gray-900 opacity-10 uppercase">our</span>
        </h1>
      </div>

      <div
        ref={scrollContainerRef}
        onDoubleClick={handleDoubleClick}
        className="flex overflow-x-scroll  xl:ml-16 lg:w-auto md:gap-8 py-10 lg:gap-8 lg:mx-12 xl:mx-16 2xl:gap-24 2xl:mx-48 gap-12 relative justify-center md:justify-start lg:justify-start md:m-12 lg:m-8 scrollbar-hide cursor-pointer"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
      >
        {images.map((item, index) => (
          <div key={index} className="relative flex-shrink-0 transition-transform duration-700 ease-in-out">
            <img
              src={item}
              alt={`Image ${index + 1}`}
              className="rounded-3xl relative left-48 md:left-0 h-[250px] w-[340px] md:w-[320px] lg:w-[280px] object-cover transition-all duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallerysample;
