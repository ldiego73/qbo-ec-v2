import { Button, Title } from "@components/index";
import { Layout } from "@layouts/main";
import React, { useState } from "react";
import {
  Card,
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  FormSelect,
  FormTextArea,
  FieldError,
} from "./styles";

const distritos = [
  "SMP",
  "Los Olivos",
  "Lima",
  "Ciudad de Mexico",
  "Jesus María",
];

export const CheckoutFormSimpleScreen = () => {
  const [data, setData] = useState({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    celular: "",
    correo: "",
    notas: "",
  });

  function handleInputChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <Layout>
      <Title value="Finalizar Compra" />
      <Card>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Nombres</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu nombres"
              name="nombres"
              required
              onChange={handleInputChange}
            />
            {!data.nombres && (
              <FieldError>Debes ingresar los nombres</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Apellidos</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu apellidos"
              name="apellidos"
              required
              onChange={handleInputChange}
            />
            {!data.apellidos && (
              <FieldError>Debes ingresar los apellidos</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Distritos</FormLabel>
            <FormSelect name="distrito" onChange={handleInputChange}>
              {distritos.map((distrito, key) => (
                <option key={`distrito-key-${key}`} value={distrito}>
                  {distrito}
                </option>
              ))}
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel>Dirección</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu dirección"
              name="direccion"
              required
              onChange={handleInputChange}
            />
            {!data.direccion && (
              <FieldError>Debes ingresar la dirección</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Celular</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu número de celular"
              name="celular"
              required
              onChange={handleInputChange}
            />
            {!data.celular && (
              <FieldError>Debes ingresar el celular</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Correo electrónico</FormLabel>
            <FormInput
              type="email"
              placeholder="Ingresa tu correo electrónico"
              name="correo"
              required
              onChange={handleInputChange}
            />
            {!data.correo && (
              <FieldError>Debes ingresar el correo</FieldError>
            )}
          </FormGroup>
          <Title value="Información adicional" />
          <FormGroup>
            <FormLabel>Notas del pedido (opcional)</FormLabel>
            <FormTextArea
              placeholder="Ingresa notas que quieras agregar a tu pedido"
              name="notas"
              rows="10"
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" value="Enviar" />
          </FormGroup>
        </Form>
      </Card>
    </Layout>
  );
};
