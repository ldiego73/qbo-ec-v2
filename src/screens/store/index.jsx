import { EcommerceContext } from "@contexts/ecommerce.context";
import React, { useContext, useReducer, useRef } from "react";
import { CardProduct, Title } from "@components";
import { Layout } from "@layouts/main";
import { useCategories } from "@core/useCategories";
import { Redirect } from "react-router";
import { useProducts, useFilterProducts } from "./hooks";
import {
  Wrapper,
  SideBar,
  Search,
  SearchTitle,
  SearchInput,
  Categories,
  Category,
  Products,
  Product,
} from "./styles";
import { initialState, reducer } from "./reducers/store.reducer";
import { REDIRECT_PRODUCT_DETAIL } from "./reducers/store.action";

export function StoreScreen() {
  const categories = useCategories();
  const products = useProducts();
  const query = new URLSearchParams(window.location.search);
  const {
    filterProducts,
    selectedCategory,
    findProductsByCategory,
    findProductsByName,
  } = useFilterProducts(products, query.get("category"));
  const { addProductToCart } = useContext(EcommerceContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const refInput = useRef(null);

  function redirectToDetailProduct(id) {
    dispatch({ type: REDIRECT_PRODUCT_DETAIL, productId: id });
  }

  function handleAddProduct(p) {
    addProductToCart(p);
  }

  return (
    <Layout delivery>
      {state.productId && (
        <Redirect to={{ pathname: `/product/${state.productId}` }} />
      )}
      <Wrapper>
        <SideBar>
          <Title value="Nuestros productos" />
          <Search>
            <SearchTitle>Buscar producto</SearchTitle>
            <SearchInput
              ref={refInput}
              type="text"
              placeholder="Nombre del producto"
              onChange={e => findProductsByName(e.target.value)}
            />
          </Search>
          <Categories>
            {categories &&
              categories.map((category, index) => (
                <Category
                  key={`category-${index}`}
                  selected={selectedCategory === category.id}
                  onClick={() => findProductsByCategory(category)}
                >
                  {category.name}
                </Category>
              ))}
          </Categories>
        </SideBar>
        <Products>
          {filterProducts && filterProducts.length > 0 ? (
            filterProducts.map((items, index) => (
              <Product key={`product-${index}`}>
                {items.map(({ product, key }) => (
                  <CardProduct
                    key={key}
                    product={product}
                    width={280}
                    imageHeight={129}
                    onCardAdd={(p) => handleAddProduct(p)}
                    onCardClick={() => redirectToDetailProduct(product.id)}
                  />
                ))}
              </Product>
            ))
          ) : (
            <div>No se encontraron productos</div>
          )}
        </Products>
      </Wrapper>
    </Layout>
  );
}
