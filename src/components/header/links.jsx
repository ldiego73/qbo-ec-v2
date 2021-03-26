import React from "react";
import styled from "styled-components";
import { TEXT_COLOR_WHITE } from "../variables";
import { Link } from "react-router-dom";

const LinksWrapper = styled.div`
  margin-left: 40px;
`;

const LinkWrapper = styled(Link)`
  flex: 1;
  padding: 16px 40px;
  color: ${TEXT_COLOR_WHITE};
  text-decoration: none;

  font-size: 16px;
  line-height: 14px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export const HeaderLinks = ({ links }) => (
  <LinksWrapper>
    {links.map((link, index) => (
      <LinkWrapper key={`header-link-${index}`} to={link.to}>
        {link.title}
      </LinkWrapper>
    ))}
  </LinksWrapper>
);
