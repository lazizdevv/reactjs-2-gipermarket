import React from "react";
import { Link } from "react-router-dom";

export const SimpleCard = ({ id, img, title, price, rame, color }) => {
  return (
    <>
      <Link to={`/product-detail/${id}`}>
        <div className="flex items-center gap-4 h-40 py-5">
          <img className="w-36" src={img} alt="" />
          <div className="w-64 break-words flex flex-col justify-between gap-3 h-full">
            <h1 className="text-lg font-normal">
              {title} {rame} {color}
            </h1>
            <p className="font-semibold text-lg">{price} Сум</p>
          </div>
        </div>
      </Link>
    </>
  );
};
