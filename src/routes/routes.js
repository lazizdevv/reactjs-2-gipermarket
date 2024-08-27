import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { CatalogSingle } from "../pages/catalog-single/catalog-single";
import { BrandSingle } from "../pages/brand-single/brand-single";
import { ProductDetail } from "../pages/product-detail/product-detail";
import { Cart } from "../pages/cart/cart";
import { Favorites } from "../pages/favorites/favorites";

export const routes = [
    {
        component:Home,
        id:nanoid()
    },
    {
        component:CatalogSingle,
        path:"/:categoryName",
        id:nanoid()
    },
    {
        component:BrandSingle,
        path:"single-brand/:brand",
        id:nanoid()
    },
    {
        component:ProductDetail,
        path:"product-detail/:id",
        id:nanoid()
    },
    {
        component:Cart,
        path:"cart",
        id:nanoid()
    },
    {
        component:Favorites,
        path:"favorites",
        id:nanoid()
    },
    
];
