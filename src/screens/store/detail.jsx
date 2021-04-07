import React, { useState } from "react";
import {
  TEXT_COLOR_SECONDARY,
  TEXT_COLOR_GRAY,
  TEXT_COLOR_PRIMARY,
} from "@components/variables";
import { Button } from "@components/index";
import { Layout } from "@layouts/main";
import { useProductById } from "@store/hooks/useProductById";
import styled from "styled-components";
import { Link, Redirect, useParams } from "react-router-dom";

const DetailScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  margin-bottom: 80px;
`;

const BackLink = styled(Link)`
  margin-bottom: 36px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_SECONDARY};
  text-decoration: none;
`;

const ProductContent = styled.div`
  display: flex;
`;

const ProductImage = styled.div`
  width: 480px;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 80px;
`;

const ProductCategory = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_GRAY};
  margin-bottom: 8px;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 20px;
`;

const ProductDescription = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 60px;
`;

const ProductActions = styled.div`
  width: 120px;
  margin-bottom: 48px;
`;

export function DetailScreen() {
  const params = useParams();
  const { product, isRedirect } = useProductById(params.id);

  return (
    <Layout>
      {isRedirect && <Redirect to="/store" />}
      {product && (
        <DetailScreenContainer>
          <BackLink to="/store">Volver al catálogo</BackLink>
          <ProductContent>
            <ProductImage>
              <img src={product.image} alt={product.name} loading="lazy" />
            </ProductImage>
            <ProductInfo>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </ProductDescription>
              <ProductActions>
                <Button type="primary" value="Agregar" />
              </ProductActions>
            </ProductInfo>
          </ProductContent>
        </DetailScreenContainer>
      )}
    </Layout>
  );
}
