import { useState, useEffect } from "react";
import { findProductsByParameters } from "@store/core/products.core";

export function useFilterProducts(products, categoryId) {
  const [filterProducts, setFilterProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState(-1);

  function findProductsByCategory(category) {
    const { id } = category;

    loadProducts(id === selectedCategory ? 0 : id);
    setSelectedCategory(id === selectedCategory ? -1 : id);
  }

  function findProductsByName(name) {
    loadProducts(0, name);
    setSelectedCategory(-1);
  }

  function loadProducts(category, name) {
    if (!products) return;

    if (!category) category = 0;
    if (typeof category === "string") category = parseInt(category, 10);

    findProductsByParameters({
      products,
      categoryId: category,
      name,
      fn(items) {
        setFilterProducts(items);
        setSelectedCategory(category);
      },
    });
  }

  useEffect(() => {
    loadProducts(categoryId);
  }, [products, categoryId]);

  return {
    filterProducts,
    selectedCategory,
    findProductsByCategory,
    findProductsByName,
  };
}
