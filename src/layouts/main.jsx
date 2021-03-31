import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  Footer,
  Header,
  BannerImage,
  Banner,
  Delivery,
} from "../components";

export function Layout({ banner, delivery, children }) {
  const [banners, setBanners] = useState(null);

  async function getBanners() {
    const { data } = await axios.get("https://ec-qbo.herokuapp.com/banners");
    const items = [];

    data.forEach((item) => {
      const { id, imagen } = item;
      const partsImagen = imagen.split(".");
      const newImagen = `${partsImagen[0]}.jpg`;

      items.push(
        <BannerImage
          src={`https://ec-qbo.herokuapp.com/banners/${newImagen}`}
          alt={`Banner ${id}`}
        />
      );
    });
    setBanners(items);
  }

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
      <Header />
      {delivery && (
        <Delivery>
          Delivery a San Miguel, La Perla, Magdalena y Pueblo Libre
        </Delivery>
      )}
      {banner && banners && <Banner images={banners} />}
      <Container>
        <Content direction="column">{children}</Content>
      </Container>
      <Footer />
    </>
  );
}
