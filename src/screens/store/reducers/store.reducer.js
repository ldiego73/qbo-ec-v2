/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

import { findProductsByParameters } from "@store/core/products.core";
import {
  FILTERS_PRODUCTS_RESULT,
  FILTERS_PRODUCT_SEARCH,
  REDIRECT_PRODUCT_DETAIL,
} from "./store.action";

export function useFilterProducts(products, categoryId, name) {
  let filterProducts = [];
  let selectedCategory = -1;

  function loadProducts(category, name) {
    if (!products) return;

    if (!category) category = 0;
    if (typeof category === "string") category = parseInt(category, 10);

    findProductsByParameters({
      products,
      categoryId: category,
      name,
      fn(items) {
        filterProducts = items;
        selectedCategory = category;
      },
    });
  }

  function findProductsByCategory(category) {
    const { id } = category;

    loadProducts(id === selectedCategory ? 0 : id);
    selectedCategory = id === selectedCategory ? -1 : id;
  }

  function findProductsByName(name) {
    loadProducts(0, name);
    selectedCategory = -1;
  }

}

export function reducer(state, action) {
  switch (action.type) {
    case REDIRECT_PRODUCT_DETAIL:
      return { ...state, productId: action.productId };
    case FILTERS_PRODUCTS_RESULT:
      return { ...state, products: action.products, productId: null };
    case FILTERS_PRODUCT_SEARCH:
      return { ...state, categoryId: action.categoryId, name: action.name };
    default:
      return state;
  }
}

export const initialState = {
  productId: null,
  products: [],
  categoryId: 0,
  name: "",
}
