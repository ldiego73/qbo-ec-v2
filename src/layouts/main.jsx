import React from "react";
import {
  Container,
  Content,
  Footer,
  Header,
  BannerImage,
  Banner,
} from "../components";

const images = [
  <BannerImage
    src="http://rioquintana.com/wp-content/uploads/2020/01/BANNER_1.png"
    alt="Banner 1"
  />,
  <BannerImage
    src="http://rioquintana.com/wp-content/uploads/2020/01/BANNER_2.png"
    alt="Banner 2"
  />,
  <BannerImage
    src="http://rioquintana.com/wp-content/uploads/2020/01/BANNER_3.png"
    alt="Banner 3"
  />,
  <BannerImage
    src="http://rioquintana.com/wp-content/uploads/2020/01/BANNER_4.png"
    alt="Banner 4"
  />,
  <BannerImage
    src="http://rioquintana.com/wp-content/uploads/2020/01/BANNER_5.png"
    alt="Banner 5"
  />,
];

export const Layout = ({ banner, children }) => (
  <>
    <Header />
    {banner && <Banner images={images} />}
    <Container>
      <Content direction="column">{children}</Content>
    </Container>
    <Footer />
  </>
);
