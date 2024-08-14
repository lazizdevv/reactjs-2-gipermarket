import React, { useState, useEffect } from "react";
import { ArrowLeftIcon } from "../../assets/svg/ArrowLeftIcon";
import { ArrowRightIcon } from "../../assets/svg/ArrowRightIcon";
import { Button } from "../../ui/button/button";
import { useGetCalalogs } from "../../service/useGetCatalogs";
import { Link } from "react-router-dom";
import { Loading } from "../loading";

// CatalogCarousel Component
export const CatalogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data: banners = [], isLoading, error } = useGetCalalogs();
  // console.log();

  const [visibleItems, setVisibleItems] = useState(1);

  // Configure the number of visible items based on screen width
  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width >= 1280) setVisibleItems(4); // 4 items on large screens
    else if (width >= 1024) setVisibleItems(3); // 3 items on medium screens
    else if (width >= 768) setVisibleItems(2); // 2 items on small screens
    else setVisibleItems(1); // 1 item on extra small screens
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  // if (isLoading) return <Loading />;
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
    <div className="relative w-full max-w-screen-2xl mx-auto my-8 overflow-hidden">
      <div
        className="flex gap-5  py-2 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex * 100) / visibleItems}%)`,
        }}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {banners?.map((banner, index) => (
              <div
                key={index}
                className=" flex-shrink-0"
                style={{ width: `${65 / visibleItems}%` }}
              >
                <Link to={`/${banner.name}`}>
                  <div className="bg-accent shadow-lg shadow-primary p-4 w-60 flex flex-col justify-center items-center text-center border-2 border-red-600">
                    <img
                      src={banner.img}
                      alt={banner.id}
                      className="w-24 h-auto object-cover"
                    />
                    <p className="mt-2">{banner.text}</p>
                    <p className="mt-2">{banner.name}</p>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center"
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 bg-white w-10 h-10 rounded-full flex justify-center"
      >
        <ArrowRightIcon />
      </Button>

      {/* <div className="flex justify-center mt-1">
        {Array(Math.ceil(banners.length / visibleItems)).fill().map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index * visibleItems)}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${Math.floor(currentIndex / visibleItems) === index ? "bg-primary" : "bg-secondary"}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};
