import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { AccountIcon } from "../../assets/svg/AccountIcon";
import { CartIcon } from "../../assets/svg/CartIcon";
import { HeartIcon } from "../../assets/svg/HeartIcon";
import { Search } from "../../components/search";
import { Button } from "../../ui/button/button";
import { MenuIcon } from "../../assets/svg/MenuIcon";

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
            <LogoIcon />
            <Button
              startIcon={<MenuIcon />}
              children={"Каталог"}
              className="w-40 flex items-center gap-4"
            />
          </div>
          <div className="flex">
            <Search />
          </div>

          <div className="flex gap-5">
            <Link className="w-16 h-11 text-center text-base">
              <div className="mx-auto w-fit">
                <AccountIcon />
              </div>
              <p>Войти</p>
            </Link>
            <Link className="w-fit h-11 text-center text-base">
              <div className="mx-auto w-fit">
                <HeartIcon />
              </div>
              <p>Избранное</p>
            </Link>
            <Link className="w-fit h-11 text-center text-base">
              <div className="mx-auto w-fit">
                <CartIcon />
              </div>
              <p>Корзина</p>
            </Link>
          </div>
        </div>
      </div>
      
    </>
  );
};
