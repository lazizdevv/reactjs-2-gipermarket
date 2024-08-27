import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/product-reducer";
import { saveState } from "../utils/storage";
import favoritesReducer from "./products/favorites-reducer";

export const store = configureStore({
  reducer: {
    product: productsReducer,
    favorites: favoritesReducer,
  },
});

store.subscribe(() => {
  saveState("products", store.getState().product);
  saveState("favorites", store.getState().favorites);
});
