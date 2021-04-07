import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { CardProduct, Title } from "@components";
import { TEXT_COLOR_SECONDARY } from "@components/variables";

const OfertaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 112px;
`;

const OfertaHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const OfertaLink = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_SECONDARY};
  cursor: pointer;
  text-decoration: none;
`;

const OfertaProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Ofertas({ title, products }) {
  const [productId, setProductId] = useState(null);

  const handleAdd = product => {
    alert(JSON.stringify(product));
  };

  const handleClicked = product => {
    setProductId(product.id);
  };

  return (
    <OfertaWrapper>
      {productId && <Redirect to={`/product/${productId}`} />}
      <OfertaHeader>
        <Title flex value={title} />
        <OfertaLink to="/store">Ver catálogo completo</OfertaLink>
      </OfertaHeader>
      <OfertaProducts>
        {products &&
          products.map((p, index) => (
            <CardProduct
              key={`oferta-product-${index}`}
              product={p}
              onCardAdd={handleAdd}
              onCardClick={handleClicked}
            />
          ))}
      </OfertaProducts>
    </OfertaWrapper>
  );
}
