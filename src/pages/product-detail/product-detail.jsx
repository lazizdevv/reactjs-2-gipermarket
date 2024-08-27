import React from "react";
import { useParams } from "react-router-dom";
import { useAllProducts } from "../../service/query/useAllProducts";
import { ProductCard } from "../../components/product-card/product-card";
import { Loading } from "../../components/loading";

export const ProductDetail = () => {
  const { id } = useParams();
  // console.log(id);

  const { data: products, isLoading } = useAllProducts();

  const product = products?.find((product) => product.id == id);
  if (isLoading) return <Loading />;
  // console.log(product);
  return (
    <>
      <div className="">
        <img src={product?.img} alt="" />
        <p>{product.title}</p>
        {/* <ProductCard {...product}/> */}
      </div>
    </>
  );
};
