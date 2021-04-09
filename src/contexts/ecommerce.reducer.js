export const ADD_PRODUCT = "ecommerce/product/add";
export const REMOVE_PRODUCT = "ecommerce/product/remove";
export const UPDATE_QUANTITY_PRODUCT = "ecommerce/product/update";

function addProductToCart(state, product) {
  const cart = [...state.cart];
  const matchedProduct = cart.findIndex(p => p.id === product.id);

  if (matchedProduct < 0) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[matchedProduct].quantity += 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

function removeProductToCart(state, productId) {
  const cart = [...state.cart];
  const matchedProduct = cart.findIndex(p => p.id === productId);

  cart[matchedProduct].quantity -= 1;

  if (cart[matchedProduct].quantity <= 0) cart.splice(matchedProduct, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

function updateProductQuantityToCart(state, productId, quantity) {
  const cart = [...state.cart];
  const matchedProduct = cart.findIndex(p => p.id === productId);

  cart[matchedProduct].quantity = quantity;

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

export function reducer(state, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(state, action.product);
    case REMOVE_PRODUCT:
      return removeProductToCart(state, action.productId);
    case UPDATE_QUANTITY_PRODUCT:
      return updateProductQuantityToCart(
        state,
        action.productId,
        action.quantity
      );
    default:
      return state;
  }
}
