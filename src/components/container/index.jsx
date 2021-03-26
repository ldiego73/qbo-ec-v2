import React from "react";
import styled from "styled-components";
import { CONTAINER_WIDTH } from "../variables";

const ContainerWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${CONTAINER_WIDTH}px;
  width: auto;
  height: ${({ height }) => (height ? `${height}px` : "auto")};
`;

export const Container = ({ children, height }) => (
  <ContainerWrapper height={height}>{children}</ContainerWrapper>
);
