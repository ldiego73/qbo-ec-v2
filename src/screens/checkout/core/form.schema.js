import * as schema from "yup";

export const schemaValidator = schema.object().shape({
  nombres: schema
    .string()
    .required("Debe ingresar los nombres")
    .min(3, "El campo nombre debe tener como minimo 3 digitos"),
  apellidos: schema.string().required("Debe ingresar los apellidos"),
  celular: schema
    .string()
    .required("El celular es requerido")
    .matches(/^[0-9]+$/, { message: "El celular debe ser solo numeros" })
    .min(9, "El celular debe tener minimo 9 digitos"),
  correo: schema
    .string()
    .required("Debe ingresar el email")
    .email("Debe tener un email valido"),
  direccion: schema
    .string()
    .required("La dirección es requerida")
    .min(30, "La dirección debe tener como minimo 30 digitos"),
});
