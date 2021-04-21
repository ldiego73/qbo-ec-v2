/* eslint-disable no-useless-escape */

export const nombresValidate = {
  name: "nombres",
  rules: {
    required: {
      value: true,
      message: "Los nombres son requeridos",
    },
    minLength: {
      value: 3,
      message: "El minimo de digitos a ingresar en los nombres son 3",
    },
  },
};

export const apellidosValidate = {
  name: "apellidos",
  rules: {
    required: {
      value: true,
      message: "Los apellidos son requeridos",
    },
  },
};

export const direccionValidate = {
  name: "direccion",
  rules: {
    required: {
      value: true,
      message: "La dirección es requerida",
    },
  },
};

export const celularValidate = {
  name: "celular",
  rules: {
    required: {
      value: true,
      message: "El celular es requerido",
    },
    pattern: {
      value: /[0-9]/,
      message: "El celular debe ser solo numeros",
    },
  },
};

export const correoValidate = {
  name: "correo",
  rules: {
    required: {
      value: true,
      message: "El correo es requerido",
    },
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi,
      message: "El correo debe tener un formato valido",
    },
  },
};

export const confirmarPasswordValidate = {
  name: "password_confirm",
  rules: {
    required: {
      value: true,
      message: "La confirmación del password es requerido",
    },
    minLength: {
      value: 8,
      message: "La confirmación del password debe tener un minimo de 8 digitos",
    },
    validate: (value, password) =>
      value === password || "Debe ingresar el mismo password",
  },
};
