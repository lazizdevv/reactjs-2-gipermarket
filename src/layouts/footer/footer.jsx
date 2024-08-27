import React from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { SocialMedia } from "./components/social-media";

export const Footer = () => {
  return (
    <>
      <div className="container bg-accent">
        <div className="flex justify-between flex-wrap py-10">
          <div className="space-y-4">
            <div className="">
              <LogoIcon />
            </div>

            <div className="">
              <a href="" className="text-xl font-medium">
                +99 893 374-66-44
              </a>
              <p className="text-sm font-normal">справочная служба</p>
            </div>

            <div className="">
              <a href="" className="text-xl font-medium">
                +99 893 374-66-44
              </a>
              <p className="text-sm font-normal">справочная служба</p>
            </div>

            <div className="">
              <SocialMedia />
            </div>
          </div>

          <div className="flex justify-around flex-wrap gap-5 lg:gap-24">
            <div className="">
              <ul className="space-y-4">
                <li>
                  <Link>Условия обмена и возврата</Link>
                </li>
                <li>
                  <Link>Каталог</Link>
                </li>
                <li>
                  <Link>О компании</Link>
                </li>
                <li>
                  <Link>Контакты</Link>
                </li>
                <li>
                  <Link>Доставка</Link>
                </li>
                <li>
                  <Link>Доставка</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-4">
                <li>
                  <Link>Клиентам</Link>
                </li>
                <li>
                  <Link>Личный кабинет</Link>
                </li>
                <li>
                  <Link>Блог</Link>
                </li>
                <li>
                  <Link>Обратная связь</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="space-y-4">
                <li>
                  <Link>Информация</Link>
                </li>
                <li>
                  <Link>Пользовательское соглашение</Link>
                </li>
                <li>
                  <Link>Политика конфиденциальности и оферта</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-[#EAEAEA]">
        <div className="py-6">
          <h1>
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </h1>
        </div>
      </div>
    </>
  );
};
