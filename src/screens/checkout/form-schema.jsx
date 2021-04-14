import { Button, Title } from "@components/index";
import { Layout } from "@layouts/main";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
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
import { schemaValidator } from "./core/form.schema";

const distritos = [
  "SMP",
  "Los Olivos",
  "Lima",
  "Ciudad de Mexico",
  "Jesus María",
];

export const CheckoutFormSchemaScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidator),
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Layout>
      <Title value="Finalizar Compra" />
      <Card>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <FormLabel>Nombres</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu nombres"
              {...register("nombres")}
            />
            {errors.nombres && (
              <FieldError>{errors.nombres.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Apellidos</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu apellidos"
              {...register("apellidos")}
            />
            {errors.apellidos && (
              <FieldError>{errors.apellidos.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Distritos</FormLabel>
            <FormSelect name="distrito" {...register("distrito")}>
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
              {...register("direccion")}
            />
            {errors.direccion && (
              <FieldError>{errors.direccion.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Celular</FormLabel>
            <FormInput
              type="text"
              placeholder="Ingresa tu número de celular"
              {...register("celular")}
            />
            {errors.celular && (
              <FieldError>{errors.celular.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Correo electrónico</FormLabel>
            <FormInput
              type="email"
              placeholder="Ingresa tu correo electrónico"
              {...register("correo")}
            />
            {errors.correo && <FieldError>{errors.correo.message}</FieldError>}
          </FormGroup>
          <Title value="Información adicional" />
          <FormGroup>
            <FormLabel>Notas del pedido (opcional)</FormLabel>
            <FormTextArea
              placeholder="Ingresa notas que quieras agregar a tu pedido"
              rows="10"
              {...register("notas")}
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
