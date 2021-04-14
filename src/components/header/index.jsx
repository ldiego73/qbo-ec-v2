import React from "react";
import { useTranslation } from "react-i18next";
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

export function Header() {
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <Container height={HEADER_HEIGHT}>
        <Content align="center">
          <TitleWrapper to="/">{t("title")}</TitleWrapper>
          <HeaderLinks />
          <Actions />
        </Content>
      </Container>
    </HeaderWrapper>
  );
}
