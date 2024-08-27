import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CartIcon } from "../../assets/svg/CartIcon";
import { addProduct } from "../../redux/products/product-reducer";
import {
  addFavorites,
  removeFavorites,
} from "../../redux/products/favorites-reducer";
import { Button } from "../../ui/button/button";
import { VisibilityIcon } from "../../assets/svg/VisibilityIcon";
import { HeartIcon } from "../../assets/svg/HeartIcon";
import { HeartFillIcon } from "../../assets/svg/HeartFillIcon";

export const ProductCard = ({
  id,
  img,
  name,
  title,
  price,
  color,
  brand,
  rame,
}) => {
  const dispatch = useDispatch();

  //   const status = false
  const [added, setAdded] = useState(false);
  const [addFavorite, setAddFavorite] = useState(false);

  // Mahsulot holati uchun localStorage kaliti
  const storageKey = `product_${id}_isAdded`;
  const storageKey1 = `favorites_${id}_isAdded`;

  // Komponent yuklanganda localStorage'dan holatni olish
  useEffect(() => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState !== null) {
      setAdded(JSON.parse(savedState));
    }
  }, [storageKey]);
  useEffect(() => {
    const savedState = localStorage.getItem(storageKey1);
    if (savedState !== null) {
      setAddFavorite(JSON.parse(savedState));
    }
  }, [storageKey1]);

  const buyProduct = () => {
    dispatch(addProduct({ name, price, img, id }));

    setAdded(true);
    localStorage.setItem(storageKey, true);
  };

  const addFavoritescall = () => {
    dispatch(addFavorites({ name, price, img, id }));

    setAddFavorite(true);
    localStorage.setItem(storageKey1, true);
  };

  const removefavoritescall = () => {
    // const storageKey1 = `favorites_${id}_isAdded`;
    dispatch(removeFavorites(id));
    setAddFavorite(false);
    localStorage.setItem(storageKey1, false);
  };

  return (
    <>
      <div className="max-w-64 w-full mx-auto">
        <div className="relative cursor-pointer hover:bg-accent transition-all p-4 rounded-md z-10">
          {!addFavorite ? (
            <div className="absolute right-3 top-3">
              <button onClick={addFavoritescall}>
                <HeartIcon />
              </button>
            </div>
          ) : (
            <div className="absolute right-3 top-3 text-red-500">
              <button onClick={removefavoritescall}>
                <HeartFillIcon />
              </button>
            </div>
          )}
          <img className="w-40" src={img} alt="" />
          <div className="w-9/12 mb-4 text-base font-normal">
            <p className="line-clamp-3">
              {title} <span>{rame}</span>
              <p>{color}</p>
            </p>
          </div>
          <div className="flex w-full justify-between flex-wrap">
            <h1 className="text-lg font-semibold">{price} Сум</h1>
            <div className="">
              {!added ? (
                <Button
                  className="w-9 h-9 grid justify-center items-center text-center bg-primary rounded-lg"
                  onClick={buyProduct}
                >
                  <CartIcon />
                </Button>
              ) : (
                <Link to={"/cart"}>
                  <Button className="w-9 h-9 grid justify-center items-center bg-blue-500 rounded-lg">
                    <VisibilityIcon />
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <Link to={`/product-detail/${id}`}>
            <p className="hover:underline font-medium">view detail</p>
          </Link>
        </div>
      </div>
    </>
  );
};
