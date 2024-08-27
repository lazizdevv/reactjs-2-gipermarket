import React from "react";
import { Carousel } from "../../components/carousel/carousel";
import { CatalogCarousel } from "../../components/catalog-carousel/catalog-carousel";
import { useGetPhones } from "./service/query/useGetPhones";
import { Loading } from "../../components/loading";
import { Brands } from "../../components/brands";
import { Ads } from "../../components/ads";
import { useGetNotebooks } from "../../service/query/useGetNotebooks";
import { SimpleCard } from "../../components/simple-card/simple-card";
import { CarouselSlick } from "../../components/carousel-slick/carousel-slick";

const Home = () => {
  const { data: Phones, isLoading } = useGetPhones();
  const { data: Notebooks } = useGetNotebooks();

  if (isLoading) return <Loading />;

  return (
    <>
      <Carousel />
      <div className="container">
        <CatalogCarousel />
      </div>
      <div className="container my-10">
        <h1 className="mb-5 text-2xl font-semibold">Смартфоны и планшеты</h1>
        <CarouselSlick>{Phones}</CarouselSlick>
      </div>
      <section className="bg-primary mb-12">
        <Ads />
      </section>
      <div className="container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="mb-5">
            <h1 className="text-2xl font-normal pb-10">Смартфоны и планшеты</h1>
            <div className="flex flex-col gap-4">
              {Phones.slice(6, 9).map((phone) => (
                <SimpleCard key={phone.id} {...phone} />
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h1 className="text-2xl font-normal pb-10">
              Ноутбуки, планшеты и компьютеры
            </h1>
            <div className="flex flex-col gap-4">
              {Notebooks?.slice(0, 3).map((notebooks) => (
                <SimpleCard key={notebooks.id} {...notebooks} />
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h1 className="text-2xl font-normal pb-10">Смартфоны и планшеты</h1>
            <div className="flex flex-col gap-4">
              {Phones.slice(9, 12).map((phone) => (
                <SimpleCard key={phone.id} {...phone} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <h1 className="mb-5 text-2xl font-semibold">Смартфоны и планшеты</h1>
        <CarouselSlick>{Phones}</CarouselSlick>
      </div>

      <div className="container my-10 ">
        <h1 className="mb-5 text-2xl font-semibold">
          Ноутбуки, планшеты и компьютеры
        </h1>
        <CarouselSlick>{Notebooks}</CarouselSlick>
      </div>

      <div className="container">
        <Brands />
      </div>
    </>
  );
};

export default Home