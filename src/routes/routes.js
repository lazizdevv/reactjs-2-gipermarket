import { nanoid } from "nanoid";
import { Home } from "../pages/home";
import { CatalogSingle } from "../pages/catalog-single/catalog-single";

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
    
];
