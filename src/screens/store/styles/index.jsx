import styled from "styled-components";
import {
  COLOR_GRAY_LIGHT,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from "@components/variables";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 44px;
`;

export const SideBar = styled.div`
  width: 280px;
  min-height: 678px;
  background: ${COLOR_GRAY_LIGHT};
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 40px 32px;
`;

export const Search = styled.div`
  margin-top: 28px;
`;

export const SearchTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  margin-bottom: 4px;
`;

export const SearchInput = styled.input`
  padding: 16px 12px;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  outline: none;
`;

export const Categories = styled.div`
  margin-top: 32px;
`;

export const Category = styled.div`
  font-size: 18px;
  line-height: 18px;
  color: ${({ selected }) =>
    selected ? TEXT_COLOR_SECONDARY : TEXT_COLOR_PRIMARY};
  margin-bottom: 28px;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Products = styled.div`
  flex: 1;
  margin-left: 40px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
