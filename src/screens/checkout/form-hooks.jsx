import { Button, Title } from "@components/index";
import { Layout } from "@layouts/main";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import {
  nombresValidate,
  apellidosValidate,
  direccionValidate,
  celularValidate,
  correoValidate,
  confirmarPasswordValidate,
} from "./core";
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

export const CheckoutFormHooksScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = useRef({});

  password.current = watch("password", "");

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
              {...register(nombresValidate.name, { ...nombresValidate.rules })}
              placeholder="Ingresa tu nombres"
            />
            {errors.nombres && (
              <FieldError>{errors.nombres.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Apellidos</FormLabel>
            <FormInput
              {...register(apellidosValidate.name, {
                ...apellidosValidate.rules,
              })}
              placeholder="Ingresa tu apellidos"
            />
            {errors.apellidos && (
              <FieldError>{errors.apellidos.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Distritos</FormLabel>
            <FormSelect {...register("distrito")}>
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
              {...register(direccionValidate.name, {
                ...direccionValidate.rules,
              })}
              placeholder="Ingresa tu dirección"
            />
            {errors.direccion && (
              <FieldError>{errors.direccion.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Celular</FormLabel>
            <FormInput
              {...register(celularValidate.name, { ...celularValidate.rules })}
              placeholder="Ingresa tu número de celular"
            />
            {errors.celular && (
              <FieldError>{errors.celular.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Correo electrónico</FormLabel>
            <FormInput
              {...register(correoValidate.name, { ...correoValidate.rules })}
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.correo && <FieldError>{errors.correo.message}</FieldError>}
          </FormGroup>
          <Title value="Información adicional" />
          <FormGroup>
            <FormLabel>Notas del pedido (opcional)</FormLabel>
            <FormTextArea
              {...register("notas")}
              placeholder="Ingresa notas que quieras agregar a tu pedido"
              rows="10"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <FormInput
              type="text"
              {...register("password", { required: true, minLength: 8 })}
              placeholder="Ingresa tu contraseña"
            />
            {errors.password && errors.password.type === "required" && (
              <FieldError>El password es requerido</FieldError>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <FieldError>
                El password debe tener como minimo 8 digitos
              </FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <FormLabel>Confirmar Password</FormLabel>
            <FormInput
              type="text"
              {...register(confirmarPasswordValidate.name, {
                required: confirmarPasswordValidate.rules.required,
                minLength: confirmarPasswordValidate.rules.minLength,
                validate: value =>
                  confirmarPasswordValidate.rules.validate(
                    value,
                    password.current
                  ),
              })}
              placeholder="Confirme el ingreso de tu contraseña"
            />
            {errors.password_confirm && (
              <FieldError>{errors.password_confirm.message}</FieldError>
            )}
          </FormGroup>
          <FormGroup>
            <Button color="primary" value="Enviar" />
          </FormGroup>
        </Form>
      </Card>
    </Layout>
  );
};
