import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../container";
import { Content } from "../content";
import { COLOR_PRIMARY, HEADER_HEIGHT, TEXT_COLOR_WHITE } from "../variables";
import { Actions } from "./actions";
import { HeaderLinks } from "./links";

const HeaderWrapper = styled.header`
  background: ${COLOR_PRIMARY};
  color: ${TEXT_COLOR_WHITE};
  height: ${HEADER_HEIGHT}px;
`;

const TitleWrapper = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  color: ${TEXT_COLOR_WHITE};

  &:hover,
  &:focus,
  &:active {
    color: ${TEXT_COLOR_WHITE};
  }
`;

const title = "SR. MING";
const links = [
  { title: "Nuestra Historia", to: "/history" },
  { title: "Nuestros productos", to: "/store" },
];

export const Header = () => (
  <HeaderWrapper>
    <Container height={HEADER_HEIGHT}>
      <Content align="center">
        <TitleWrapper to="/">{title}</TitleWrapper>
        <HeaderLinks links={links} />
        <Actions />
      </Content>
    </Container>
  </HeaderWrapper>
);
