import { getPriceWithCurrency } from "@utils/index";
import React from "react";
import styled from "styled-components";

import { Button } from "../button";
import { TEXT_COLOR_GRAY, TEXT_COLOR_PRIMARY } from "../variables";

const CardProductWrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "380px")};
  display: flex;
  flex-direction: column;
`;
const CardProductImage = styled.img`
  width: 100%;
  height: ${({ imageHeight }) => (imageHeight ? `${imageHeight}px` : "200px")};
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
  cursor: pointer;
`;
const CardProductHeader = styled.div`
  display: flex;
  margin-bottom: 4px;
`;
const CardProductBody = styled.div`
  display: flex;
  margin-bottom: 16px;
`;
const CardProductFooter = styled.div`
  display: flex;
`;

const CardProductSubTitle = styled.div`
  flex: 1;
  font-size: 14px;
  line-height: 16px;
  color: ${TEXT_COLOR_GRAY};
`;
const CardProductTitle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;
const CardProductPriceOld = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: ${TEXT_COLOR_GRAY};
`;
const CardProductPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

export const CardProduct = ({ product, onCardAdd, onCardClick, width, imageHeight }) => {
  const handleAdd = (p) => {
    if (typeof onCardAdd === "function") {
      onCardAdd(p);
    }
  };

  const handleClicked = (p) => {
    if (typeof onCardClick === "function") {
      onCardClick(p);
    }
  };

  return (
    <CardProductWrapper width={width}>
      <CardProductImage
        imageHeight={imageHeight}
        src={product.image}
        loading="lazy"
        onClick={() => handleClicked(product)}
      />
      <CardProductHeader>
        <CardProductSubTitle>{product.category}</CardProductSubTitle>
        {product.priceOld && (
          <CardProductPriceOld>{getPriceWithCurrency(product.priceOld)}</CardProductPriceOld>
        )}
      </CardProductHeader>
      <CardProductBody>
        <CardProductTitle>{product.name}</CardProductTitle>
        <CardProductPrice>{getPriceWithCurrency(product.price)}</CardProductPrice>
      </CardProductBody>
      <CardProductFooter>
        <Button
          color="primary"
          value="Agregar"
          onClicked={() => handleAdd(product)}
        />
      </CardProductFooter>
    </CardProductWrapper>
  );
};
