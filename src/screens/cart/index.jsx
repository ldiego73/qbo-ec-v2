import React, { useContext, useState } from "react";
import styled from "styled-components";
import { EcommerceContext } from "@contexts/ecommerce.context";
import { Layout } from "@layouts/main";
import { getPriceWithCurrency } from "@utils/index";
import CounterInput from "react-counter-input";
import {
  Title,
  COLOR_GRAY,
  COLOR_GRAY_LIGHT,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
  Button,
} from "@components/index";

const CartContent = styled.div`
  margin-top: 60px;
`;

const CardFlex = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 134px;
  width: 100%;
`;

const CardProducts = styled.div`
  flex: 1;
  background: ${COLOR_GRAY_LIGHT};
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  margin-right: 40px;
`;

const DireccionEnvio = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 8px;
`;

const Direccion = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 24px;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: ${COLOR_SECONDARY};
`;

const CardProductsTitle = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CardProductsList = styled.div``;
const CardProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  border-bottom: 1px solid ${COLOR_SECONDARY};

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;

    img {
      margin-bottom: 0;
    }
  }
`;

const CardProductImage = styled.img`
  display: flex;
  border-radius: 8px;
  width: 92px;
  height: 65px;
  object-fit: cover;
  margin-right: 16px;
  margin-bottom: 28px;
`;

const CardProductInfo = styled.div`
  width: 100%;
`;

const CardProductTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 8px;
`;

const CounterInputStyle = {
  border: `1px solid ${TEXT_COLOR_PRIMARY}`,
  borderRadius: "32px",
  maxWidth: "110px",
};

const CardProductPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_PRIMARY};
  text-align: right;
  margin-bottom: 8px;
`;

const CardProductOptions = styled.div`
  width: auto;
`;

const CardResumen = styled.div`
  width: 480px;
  padding: 40px;
  border-radius: 20px;
  background: ${COLOR_GRAY_LIGHT};
`;

const CardResumenHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const CardResumenHeaderTitle = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CardSubTotal = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CardCupon = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${COLOR_WHITE};
  margin-bottom: 40px;

  > div {
    display: flex;
    align-items: center;
  }
`;

const CardCuponTitle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CardCuponToogle = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: ${TEXT_COLOR_SECONDARY};
  cursor: pointer;
  padding: 2px;
`;

const CardInput = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e5e7e8;
  padding: 12px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: ${COLOR_GRAY};
  outline: none;
  margin-top: 20px;
  margin-right: 20px;
  flex: 1;
`;

const CardButton = styled.div`
  margin-top: 20px;
`;

const ModalidadEntrega = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 40px;
`;

const Movilidad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ selected }) => (selected ? "#FFDEBA" : "#FFF")};
  color: ${({ selected }) => (selected ? "#FF6038;" : "#283342")};
  border: 1px solid ${({ selected }) => (selected ? "#FF9F5F;" : "#E5E7E8")};
  width: 188px;
  height: 48px;
  cursor: pointer;
  border-radius: 16px;
`;

const Delivery = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
  margin: 24px 0;
`;

const TotalPagar = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
  margin: 24px 0;
  margin-bottom: 36px;
`;

export function CartScreen() {
  const priceByMovilidad = [5, 0];
  const [toogle, setToogle] = useState(false);
  const [movilidad, setMovilidad] = useState(0);
  const { cart, updateProductQuantityToCart, removeProductToCart } = useContext(
    EcommerceContext
  );

  function handleUpdateQuantity(id, quantity) {
    updateProductQuantityToCart(id, quantity);
  }

  function handleRemoveProduct(id) {
    removeProductToCart(id);
  }

  const getSubTotal = () =>
    cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  const getDelivery = () => priceByMovilidad[movilidad];
  const getTotal = () => getSubTotal() + getDelivery();

  function handleContinuar() {
    alert("Continuamos");
  }

  return (
    <Layout>
      <CartContent>
        <Title value="Tu Orden" />
        <CardFlex>
          <CardProducts>
            <DireccionEnvio>Dirección de envío</DireccionEnvio>
            <Direccion>Av. La Marina 220, San Miguel, Lima</Direccion>
            <Separator />
            <CardProductsTitle>Productos</CardProductsTitle>
            <CardProductsList>
              {cart &&
                cart.map((p, key) => (
                  <CardProduct key={`card-product-${key}`}>
                    <CardProductImage src={p.image} loading="lazy" />
                    <CardProductInfo>
                      <CardProductTitle>{p.name}</CardProductTitle>
                      <CounterInput
                        count={p.quantity}
                        min={1}
                        max={10}
                        wrapperStyle={CounterInputStyle}
                        onCountChange={count =>
                          handleUpdateQuantity(p.id, count)
                        }
                      />
                    </CardProductInfo>
                    <CardProductOptions>
                      <CardProductPrice>
                        {getPriceWithCurrency(p.price * p.quantity)}
                      </CardProductPrice>
                      <Button
                        color="primary"
                        value="Eliminar"
                        onClicked={() => handleRemoveProduct(p.id)}
                      />
                    </CardProductOptions>
                  </CardProduct>
                ))}
            </CardProductsList>
          </CardProducts>
          <CardResumen>
            <CardResumenHeader>
              <CardResumenHeaderTitle>
                Total por productos
              </CardResumenHeaderTitle>
              <CardSubTotal>{getPriceWithCurrency(getSubTotal())}</CardSubTotal>
            </CardResumenHeader>
            <CardCupon>
              <div>
                <CardCuponTitle>Agregar</CardCuponTitle>
                <CardCuponToogle onClick={() => setToogle(!toogle)}>
                  {toogle ? "-" : "+"}
                </CardCuponToogle>
              </div>
              {toogle && (
                <div>
                  <CardInput type="text" placeholder="Código de cupón" />
                  <CardButton>
                    <Button color="primary" value="Aplicar cupón" />
                  </CardButton>
                </div>
              )}
            </CardCupon>
            <CardResumenHeaderTitle>
              Modalidad de Entrega
            </CardResumenHeaderTitle>
            <ModalidadEntrega>
              <Movilidad
                onClick={() => setMovilidad(0)}
                selected={movilidad === 0}
              >
                Delivery
              </Movilidad>
              <Movilidad
                onClick={() => setMovilidad(1)}
                selected={movilidad === 1}
              >
                Recojo en Tienda
              </Movilidad>
            </ModalidadEntrega>
            <Separator />
            <Delivery>Delivery: {getPriceWithCurrency(getDelivery())}</Delivery>
            <Separator />
            <TotalPagar>
              Total a Pagar: {getPriceWithCurrency(getTotal())}
            </TotalPagar>
            <Button
              color="primary"
              value="Continuar"
              onClicked={() => handleContinuar()}
            />
          </CardResumen>
        </CardFlex>
      </CartContent>
    </Layout>
  );
}
