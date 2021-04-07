import React, { useRef, useState } from "react";
import { CardProduct, Title } from "@components";
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
import { Layout } from "@layouts/main";
import { useCategories } from "@core/useCategories";
import { useProducts, useFilterProducts } from "./hooks";
import { Redirect } from "react-router";

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
  const [redirectId, setRedirectId] = useState(null);

  const refInput = useRef(null);

  function redirectToDetailProduct(id) {
    setRedirectId(id);
  }

  return (
    <Layout delivery={true}>
      {redirectId && <Redirect to={{ pathname: `/product/${redirectId}` }} />}
      <Wrapper>
        <SideBar>
          <Title value="Nuestros productos" />
          <Search>
            <SearchTitle>Buscar producto</SearchTitle>
            <SearchInput
              ref={refInput}
              type="text"
              placeholder="Nombre del producto"
              onChange={(e) => findProductsByName(e.target.value)}
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
