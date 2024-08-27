import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../../components/product-card/product-card";

const Favorites = () => {
  const { favoritesList } = useSelector((state) => state.favorites);
  return (
    <>
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          {favoritesList?.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
