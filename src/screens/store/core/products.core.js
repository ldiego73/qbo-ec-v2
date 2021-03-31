import axios from "axios";
import { mapToModel } from "./products.mapper";

const URL = "https://ec-qbo.herokuapp.com";

export async function getCategories(fn) {
  const { data } = await axios.get(`${URL}/categories`);

  if (typeof fn === "function") fn(data);
}

export async function getProducts(fn) {
  const { data } = await axios.get(`${URL}/products`);

  if (typeof fn === "function") fn(data);
}

export function findProductsByParameters({ products, categoryId, name, fn }) {
  let filterProducts;

  if (categoryId) {
    filterProducts = products.filter((p) => p.category_id === categoryId);
  } else filterProducts = [...products];

  if (name) {
    filterProducts = products.filter(
      (p) => p.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  }

  const items = [];
  let i = 0;

  filterProducts.forEach((product, index) => {
    if (index % 3 === 0) {
      items[i] = [];
    }

    items[i].push({
      key: `product-${index}`,
      product: mapToModel(product),
    });

    if (index % 3 === 2) i += 1;
  });

  if (typeof fn === "function") fn(items);
}
