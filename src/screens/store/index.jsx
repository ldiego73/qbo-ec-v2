import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CardProduct, Title } from "../../components";
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
import { Layout } from "../../layouts/main";
import {
  getCategories,
  getProducts,
  findProductsByParameters,
} from "./core/products.core";

export function StoreScreen() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(-1);
  const refInput = useRef(null);

  async function onLoadProducts(data) {
    const query = new URLSearchParams(window.location.search);
    let categoryId = 0;

    if (query.has("category")) {
      categoryId = parseInt(query.get("category"), 10);
      setSelectedCategory(categoryId);
    }

    setProducts(data);
    findProducts({ data, categoryId });
  }

  async function findProducts({ data, categoryId, name }) {
    let dataProducts = [];

    if (!data) {
      if (!products) return;
      dataProducts = products;
    } else {
      dataProducts = data;
    }

    findProductsByParameters({
      products: dataProducts,
      categoryId,
      name,
      fn(items) {
        setFilterProducts(items);
      },
    });
  }

  function findProductsByCategory(category) {
    if (selectedCategory === category.id) {
      setSelectedCategory(-1);
      findProducts();
    } else {
      setSelectedCategory(category.id);
      findProducts({ categoryId: category.id });
    }
    refInput.current.value = "";
  }

  function findProductsByName(name) {
    findProducts({ categoryId: 0, name });
    setSelectedCategory(-1);
  }

  useEffect(() => {
    getCategories((data) => setCategories(data));
    getProducts((data) => {
      onLoadProducts(data);
    });
  }, []);

  return (
    <Layout delivery={true}>
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
