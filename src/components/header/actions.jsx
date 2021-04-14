import { EcommerceContext } from "@contexts/ecommerce.context";
import { getPriceWithCurrency } from "@utils/index";
import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
  TEXT_COLOR_WHITE,
} from "../variables";
import {
  languages,
  TranslationContext,
} from "../../translations/translation.context";

import { ReactComponent as CartIcon } from "./icons/cart.svg";
import { ReactComponent as UserIcon } from "./icons/user.svg";

const ActionsWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 1px;
  text-align: right;

  a {
    text-decoration: none;
    color: ${TEXT_COLOR_WHITE};
    cursor: pointer;

    &:focus,
    &:hover,
    &:active {
      color: ${TEXT_COLOR_WHITE};
    }
  }
`;

const Action = styled(Link)`
  display: inline-block;

  svg {
    vertical-align: sub;
  }
`;

const ActionRight = styled(Action)`
  margin-right: 32px;
`;

const ActionLeft = styled(Action)`
  margin-left: 32px;
  margin-right: 32px;
`;

const Separator = styled.div`
  display: inline-block;
  width: 2px;
  height: 28px;
  background: ${COLOR_WHITE};
`;

const Language = styled.div`
  padding: 16px;
  cursor: pointer;
  background: ${({ selected }) => (selected ? COLOR_SECONDARY : COLOR_PRIMARY)};
`;

export function Actions() {
  const { language, updateLanguage } = useContext(TranslationContext);
  const { cart } = useContext(EcommerceContext);

  function getTotal() {
    const neto = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    return getPriceWithCurrency(neto);
  }

  return (
    <ActionsWrapper>
      <ActionRight to="/cart" align="right">
        <CartIcon /> {getTotal()}
      </ActionRight>
      <Separator />
      <ActionLeft to="/oauth/login" align="left">
        <UserIcon /> Iniciar Sesión
      </ActionLeft>
      <Separator />
      {languages.map((lng, key) => (
        <Language
          selected={language === lng}
          key={`language-${key}`}
          onClick={() => updateLanguage(lng)}
        >
          {lng.toUpperCase()}
        </Language>
      ))}
    </ActionsWrapper>
  );
}
