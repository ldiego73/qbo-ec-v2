import React from "react";
import styled from "styled-components";
import { COLOR_PRIMARY, HEADER_HEIGHT, TEXT_COLOR_WHITE } from "../variables";

const HeaderWrapper = styled.header`
  background-color: ${COLOR_PRIMARY};
  color: ${TEXT_COLOR_WHITE};
  height: ${HEADER_HEIGHT};
`;

export const Header = () => <HeaderWrapper />;
