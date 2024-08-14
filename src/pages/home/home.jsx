import React from "react";
// import { useAllProduct } from "./service/query/useAllProduct";
import { Carousel } from "../../components/carousel/carousel";
import { CatalogCarousel } from "../../components/catalog-carousel/catalog-carousel";
import { useGetPhones } from "./service/query/useGetPhones";
import { Loading } from "../../components/loading";

export const Home = () => {
  const { data, isLoading } = useGetPhones();

  const phones6 = data?.slice(0,6)

  if (isLoading) return <Loading/>;

  // console.log(data);

  return (
    <>

      <Carousel/>
      <div className="container">
        <CatalogCarousel/>
      </div>
      <div className="container">
      <div className="grid grid-cols-6">
        {phones6?.map((item) => (
          <div className="border-2 " key={item.id}>
            <img src={item.img} alt="" />
            <strong>{item.text}</strong>
            <h1>{item.title}</h1>
            <h1>{item.price} sum</h1>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};
