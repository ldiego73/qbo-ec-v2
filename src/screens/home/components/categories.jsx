import React from "react";
import styled from "styled-components";
import {
  TEXT_COLOR_PRIMARY,
  COLOR_GRAY_LIGHT,
} from "../../../components/variables";

import { ReactComponent as PromocionesIcon } from "../icons/promociones.svg";
import { ReactComponent as DimSumIcon } from "../icons/dim-sum.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
import { ReactComponent as SopasIcon } from "../icons/sopas.svg";
import { ReactComponent as BebidasIcon } from "../icons/bebidas.svg";
import { ReactComponent as PlatosDulcesIcon } from "../icons/platos-dulces.svg";
import { ReactComponent as PlatosSaladosIcon } from "../icons/platos-salados.svg";
import { ReactComponent as AlaCartaIcon } from "../icons/a-la-carta.svg";
import { ReactComponent as FamiliarIcon } from "../icons/familiar.svg";

const CategoriesWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const CategoryIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${COLOR_GRAY_LIGHT};
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${TEXT_COLOR_PRIMARY};
`;

const categories = [
  { title: "Promociones", icon: <PromocionesIcon /> },
  { title: "Dim Sum", icon: <DimSumIcon /> },
  { title: "Menu", icon: <MenuIcon /> },
  { title: "Sopas", icon: <SopasIcon /> },
  { title: "Bebidas", icon: <BebidasIcon /> },
  { title: "Platos Dulces", icon: <PlatosDulcesIcon /> },
  { title: "Platos Salados", icon: <PlatosSaladosIcon /> },
  { title: "A la Carta", icon: <AlaCartaIcon /> },
  { title: "Familiar", icon: <FamiliarIcon /> },
];

export const Categories = () => (
  <CategoriesWrapper>
    {categories.map((category, index) => (
      <CategoryIcon key={`category-item-${index}`}>
        <Circle>{category.icon}</Circle>
        <Title>{category.title}</Title>
      </CategoryIcon>
    ))}
  </CategoriesWrapper>
);
