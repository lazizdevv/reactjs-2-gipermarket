import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/storage";

const initialState = loadState("favorites") || {
  favoritesList: [],
  totalPrice: 0,
  totalCount: 0,
};

const favoritesReducer = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      const item = state.favoritesList.find(
        (product) => product.id == action.payload.id
      );

      if (!item) {
        return {
          ...state,
          totalCount: state.totalCount + 1,
          favoritesList: [
            ...state.favoritesList,
            {
              ...action.payload,
              userPrice: action.payload.price,
              userCount: 1,
            },
          ],
        };
      }

      return state;
    },
    // toggleAmount: (state, action) => {
    //   if (action.payload.type === "add") {
    //     return {
    //       ...state,
    //       productList: state.productList.map((item) => {
    //         console.log(item.price);

    //         if (item.id == action.payload.id) {
    //           return {
    //             ...item,
    //             userCount: item.userCount + 1,
    //             userPrice:
    //               (item.userCount + 1) * Number(item.price.replace(/\s+/g, "")),
    //           };
    //         }
    //         return item;
    //       }),
    //     };
    //   }

    //   return {
    //     ...state,
    //     productList: state.productList.map((item) => {
    //       if (item.id == action.payload.id && item.userCount > 1) {
    //         return {
    //           ...item,
    //           userCount: item.userCount - 1,
    //           userPrice: (item.userCount - 1) * Number(item.price.replace(/\s+/g, "")),
    //         };
    //       }
    //       return item;
    //     }),
    //   };
    // },

    removeFavorites: (state, action) => {
      return {
        ...state,
        totalCount: state.totalCount - 1,
        favoritesList: state.favoritesList?.filter(
          (item) => item.id != action.payload
        ),
      };
    },
  },
});

export default favoritesReducer.reducer;

export const { addFavorites, removeFavorites } =
  favoritesReducer.actions;
