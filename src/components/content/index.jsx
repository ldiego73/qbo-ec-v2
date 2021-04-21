import React from "react";
import styled from "styled-components";
import { PADDING } from "../variables";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  width: 100%;
  padding: 0 ${PADDING}px;

  ${({ align }) => (align ? `align-items: ${align}` : "")};
  ${({ justify }) => (justify ? `justify-content: ${justify}` : "")};

  ${({ height }) => (height ? `height: ${height}` : "")}
`;

export const Content = ({ direction, align, justify, height, children }) => (
  <ContentWrapper
    direction={direction}
    align={align}
    justify={justify}
    height={height}
  >
    {children}
  </ContentWrapper>
);
