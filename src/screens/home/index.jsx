import React from "react";
import { Layout } from "../../layouts/main";
import { Categories, Ofertas, Separator } from "./components";

const imageDefault =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Chifa2.jpg/1200px-Chifa2.jpg";

const productsHoy = [
  {
    id: 100,
    image: imageDefault,
    category: "Familiar, promociones",
    name: "Promo Verano Ming",
    priceOld: 87,
    price: 65,
  },
  {
    id: 200,
    image: imageDefault,
    category: "Bebidas, promociones",
    name: "Té para 2",
    priceOld: 42.4,
    price: 24,
  },
  {
    id: 300,
    image: imageDefault,
    category: "Bebidas, promociones",
    name: "El té de Ming",
    priceOld: 11,
    price: 6,
  },
];
const productsPopulares = [
  {
    id: 400,
    image: imageDefault,
    category: "Plato a la carta, platos dulces",
    name: "Tipakay",
    price: 22,
  },
  {
    id: 500,
    image: imageDefault,
    category: "Bebidas, promociones",
    name: "Tallarín de pollo",
    price: 22,
  },
  {
    id: 600,
    image: imageDefault,
    category: "Bebidas, promociones",
    name: "Sajofan",
    price: 22,
  },
];

export const HomeScreen = () => (
  <Layout banner>
    <Categories />
    <Separator />
    <Ofertas title="Nuestras ofertas de hoy" products={productsHoy} />
    <Ofertas title="Los platos más populares" products={productsPopulares} />
  </Layout>
);
