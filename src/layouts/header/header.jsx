import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../../components/search";
import { CartStatus } from "../../components/cart-status";
import { FavoritesStatus } from "../../components/favorites-status";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { AccountIcon } from "../../assets/svg/AccountIcon";
import { MenuIcon } from "../../assets/svg/MenuIcon";
import { Button } from "../../ui/button/button";

export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <ul className="hidden sm:flex text-base font-normal gap-6 justify-end h-10 items-center">
            <li>
              <Link>Доставка и оплата</Link>
            </li>
            <li>
              <Link>Пункты выдачи</Link>
            </li>
            <li>
              <Link>Поддержка</Link>
            </li>
            <li>
              <Link>+998 90 253 77 53</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-between gap-5 items-center py-5">
          <div className="flex justify-between w-fit gap-14">
            <Link to={"/"}>
              <LogoIcon />
            </Link>
            <Button
              startIcon={<MenuIcon />}
              children={"Каталог"}
              className="w-40 flex items-center gap-4"
            />
          </div>
          <div className="flex">
            <Search />
          </div>

          <div className="flex gap-5 items-center">
            <Link className="w-16 h-fit text-center text-base">
              <div className="mx-auto w-fit">
                <AccountIcon />
              </div>
              <p>Войти</p>
            </Link>

            <Link to={"/favorites"} className="h-fit text-center text-base">
              <FavoritesStatus />
              <p>Избранное</p>
            </Link>

            <Link to={"/cart"} className="h-fit text-center text-base">
              <CartStatus />
              <p>Корзина</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
