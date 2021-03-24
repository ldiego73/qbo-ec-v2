import React from "react";
import { Container } from "../components/container";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Layout = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);
