import { nanoid } from "nanoid";

export const routes = [
  {
    component: () => import("../pages/home/home"),
    id: nanoid(),
  },
  {
    component: () => import("../pages/catalog-single/catalog-single"),
    path: "/:categoryName",
    id: nanoid(),
  },
  {
    component: () => import("../pages/brand-single/brand-single"),
    path: "single-brand/:brand",
    id: nanoid(),
  },
  {
    component: () => import("../pages/product-detail/product-detail"),
    path: "product-detail/:id",
    id: nanoid(),
  },
  {
    component: () => import("../pages/cart/cart"),
    path: "cart",
    id: nanoid(),
  },
  {
    component: () => import("../pages/favorites/favorites"),
    path: "favorites",
    id: nanoid(),
  },
];
