import React from "react";
import { Layout } from "@layouts/main";
import { Categories, Ofertas, Separator } from "./components";
import { useCategories } from "@core/useCategories";
import { useProducts } from "./hooks";

export function HomeScreen() {
  const categories = useCategories();
  const ofertas = useProducts(0);
  const populares = useProducts(1);

  return (
    <Layout banner delivery>
      <Categories items={categories} />
      <Separator />
      <Ofertas title="Nuestras ofertas de hoy" products={ofertas} />
      <Ofertas title="Los platos más populares" products={populares} />
    </Layout>
  );
}
