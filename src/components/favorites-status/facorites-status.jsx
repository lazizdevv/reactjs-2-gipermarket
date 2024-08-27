import React from "react";
import { useSelector } from "react-redux";
// import { ShoppingCart } from "../../assets/icons/shopping-cart";
// import { CartIcon } from "../../assets/svg/CartIcon";
import { HeartIcon } from "../../assets/svg/HeartIcon";

export const FavoritesStatus = () => {
  const { totalCount } = useSelector((state) => state.favorites);

  return (
    <>
      <div className="flex gap-1 relative w-fit mx-auto">
        <HeartIcon />
        <span className="w-6 h-6 text-center rounded-full bg-red-500 font-bold text-white absolute -right-4 -top-4">
          {totalCount}
        </span>
      </div>
    </>
  );
};
