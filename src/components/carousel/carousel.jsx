import React, { useState, useEffect } from "react";
import { useGetBanners } from "../../service/useGetBanners";
import { ArrowLeftIcon } from "../../assets/svg/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/svg/ArrowRightIcon";
import { Button } from "../../ui/button/button";
import { Loading } from "../loading";

// Carousel Component
export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: banners = [], isLoading, error } = useGetBanners();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [banners.length]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading banners.</div>;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners?.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={banner.img}
                alt={banner.id}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        onClick={prevSlide}
        className="absolute left-2 lg:left-10 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 border-2 rounded-[100%] items-center flex justify-center"
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-2 lg:right-10 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-[100%] flex justify-center"
      >
        <ArrowRightIcon />
      </Button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-1">
        {banners.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
              currentIndex === index ? "bg-primary" : "bg-secondary"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
