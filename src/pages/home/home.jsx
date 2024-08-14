import React from "react";
import { useAllProduct } from "./service/query/useAllProduct";
import { Carousel } from "../../components/carousel/carousel";
import { CatalogCarousel } from "../../components/catalog-carousel/catalog-carousel";

export const Home = () => {
  const { data, isLoading } = useAllProduct();

  if (isLoading) return <h1>loading!!!</h1>;

  // console.log(data);

  return (
    <>

      <Carousel/>
      <div className="container">
        <CatalogCarousel/>
      </div>
      {/* <div className="grid grid-cols-10">
        {data.map((item) => (
          <div className="border-2 " key={item.id}>
            <strong>{item.text}</strong>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
          </div>
        ))}
      </div> */}
    </>
  );
};
