import React from "react";
import {
  Container,
  Content,
  Footer,
  Header,
  Banner,
  BannerImage,
  Delivery,
} from "@components";
import { useBanner } from "./useBanner";

export function Layout({ banner, delivery, children }) {
  const banners = useBanner();

  function renderImages() {
    const images = [];

    banners.forEach(banner => {
      images.push(<BannerImage src={banner.imagen} alt={banner.name} />);
    });

    return images;
  }

  return (
    <>
      <Header />
      {delivery && (
        <Delivery>
          Delivery a San Miguel, La Perla, Magdalena y Pueblo Libre
        </Delivery>
      )}
      {banner && banners && <Banner images={renderImages()} />}
      <Container>
        <Content direction="column">{children}</Content>
      </Container>
      <Footer />
    </>
  );
}
