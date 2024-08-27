import React from "react";
import { useSelector } from "react-redux";
import { BuyCard } from "../../components/buy-card";

const Cart = () => {
  const { productList } = useSelector((state) => state.product);
  return (
    <>
      <div className="container">
        {productList != 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
              {productList?.map((item) => (
                <BuyCard key={item.id} {...item} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center font-black text-5xl py-10">
              Your Cart Is Empty!
            </h1>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
