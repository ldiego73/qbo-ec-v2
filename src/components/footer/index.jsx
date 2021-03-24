import React from "react";
import styled from "styled-components";
import { COLOR_SECONDARY, FOOTER_HEIGHT, TEXT_COLOR_WHITE } from "../variables";

const FooterWrapper = styled.footer`
  background: ${COLOR_SECONDARY};
  color: ${TEXT_COLOR_WHITE};
  height: ${FOOTER_HEIGHT};
`;

export const Footer = () => <FooterWrapper />;
