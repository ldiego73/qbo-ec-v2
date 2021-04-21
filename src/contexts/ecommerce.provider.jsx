import React, { useReducer, useState } from "react";
import { EcommerceContext } from "./ecommerce.context";
import {
  ADD_PRODUCT,
  reducer,
  REMOVE_PRODUCT,
  UPDATE_QUANTITY_PRODUCT,
} from "./ecommerce.reducer";

const localProduct = JSON.parse(localStorage.getItem("product") || "{}");
const localCart = JSON.parse(localStorage.getItem("cart") || "[]");

export function EcommerceProvider({ children }) {
  const [product, setProduct] = useState(localProduct);
  const [state, dispatch] = useReducer(reducer, { cart: localCart });

  const updateProduct = p => setProduct(p);
  const addProductToCart = p => dispatch({ type: ADD_PRODUCT, product: p });
  const removeProductToCart = id =>
    dispatch({ type: REMOVE_PRODUCT, productId: id });
  const updateProductQuantityToCart = (id, quantity) =>
    dispatch({ type: UPDATE_QUANTITY_PRODUCT, productId: id, quantity });

  return (
    <EcommerceContext.Provider
      value={{
        product,
        cart: state.cart,
        updateProduct,
        addProductToCart,
        removeProductToCart,
        updateProductQuantityToCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}
