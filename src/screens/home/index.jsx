import axios from "axios";
import React, { useState, useEffect } from "react";
import { Layout } from "../../layouts/main";
import { Categories, Ofertas, Separator } from "./components";
import { mapToModel } from "./core";

export function HomeScreen() {
  const [data, setData] = useState(null);
  const [ofertas, setOfertas] = useState([]);
  const [populares, setPopulares] = useState([]);

  async function getCategories() {
    const { data } = await axios.get("https://ec-qbo.herokuapp.com/categories");

    setData(data);
  }

  async function getOfertas() {
    const { data } = await axios.get("https://ec-qbo.herokuapp.com/oferts");

    setOfertas(data.map((item) => mapToModel(item)));
  }

  async function getPopulares() {
    const { data } = await axios.get("https://ec-qbo.herokuapp.com/populars");

    setPopulares(data.map((item) => mapToModel(item)));
  }

  useEffect(() => {
    getCategories();
    getOfertas();
    getPopulares();
  }, []);

  return (
    <Layout banner delivery>
      <Categories items={data} />
      <Separator />
      <Ofertas title="Nuestras ofertas de hoy" products={ofertas} />
      <Ofertas title="Los platos más populares" products={populares} />
    </Layout>
  );
}
