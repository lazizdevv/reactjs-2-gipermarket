import React from "react";
import Slider from "react-slick";
import { ProductCard } from "../product-card/product-card";

export const CarouselSlick = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "#000",
          border: "1px solid #000",
          borderRadius: "50%",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        {i + 1}
      </div>
    ),
    pauseOnHover: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider className="mt-10" {...settings}>
      {children?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </Slider>
  );
};
