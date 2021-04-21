import React from "react";
import styled from "styled-components";
import {
  COLOR_PRIMARY,
  COLOR_WHITE,
  TEXT_COLOR_SECONDARY,
  TEXT_COLOR_WHITE,
} from "../variables";

function getBackground(color) {
  if (color === "primary") return COLOR_PRIMARY;
  if (color === "secondary") return COLOR_WHITE;
  return COLOR_PRIMARY;
}

function getTextColor(color) {
  if (color === "primary") return TEXT_COLOR_WHITE;
  if (color === "secondary") return TEXT_COLOR_SECONDARY;
  return TEXT_COLOR_WHITE;
}

function getBorder() {
  return COLOR_PRIMARY;
}

const ButtonWrapper = styled.button`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${({ color }) => getTextColor(color)};

  padding: 11px 28px 9px;
  width: auto;
  height: ${({ height }) => (height ? `${height}px` : "40px")};
  background: ${({ color }) => getBackground(color)};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  border: 1px solid ${getBorder()};
  outline: none;
  cursor: pointer;
`;

export const Button = ({ color, value, height, onClicked }) => {
  const handleClick = () => {
    if (typeof onClicked === "function") {
      onClicked();
    }
  };
  return (
    <ButtonWrapper color={color} height={height} onClick={handleClick}>
      {value}
    </ButtonWrapper>
  );
};
