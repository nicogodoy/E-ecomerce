import { createSelector } from "reselect";

const SELECT_PRODUCTS = (state) => state.products;


export const selectProducts = createSelector(
  [SELECT_PRODUCTS],
  products => products.products
);

export const selectCategories = createSelector(
    [SELECT_PRODUCTS],
    categories => categories.categories
);

export const selectCart = createSelector(
  [SELECT_PRODUCTS],
  cart => cart.cart
);