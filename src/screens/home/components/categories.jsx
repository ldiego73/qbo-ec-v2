import React, { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import {
  TEXT_COLOR_PRIMARY,
  COLOR_GRAY_LIGHT,
} from "../../../components/variables";

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

const getImage = (name) => `https://ec-qbo.herokuapp.com/categories/${name}`;

export const Categories = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <CategoriesWrapper>
      {selectedCategory && (
        <Redirect
          to={{ pathname: "/store", search: `category=${selectedCategory.id}` }}
        />
      )}
      {items &&
        items.map((category, index) => (
          <CategoryIcon
            key={`category-item-${index}`}
            onClick={() => handleClick(category)}
          >
            <Circle>
              <img
                src={getImage(category.imagen)}
                alt={category.name}
                loading="lazy"
              />
            </Circle>
            <Title>{category.name}</Title>
          </CategoryIcon>
        ))}
    </CategoriesWrapper>
  );
};
