import React from "react";
import { Layout } from "../../layouts/main";
import { Redirect } from "react-router-dom";

export const CheckoutScreen = () => {
  const isLogged = localStorage.getItem("auth");

  return (
    <Layout>
      {!isLogged && <Redirect to="/" />}
      <h1>Checkout Screen</h1>
    </Layout>
  );
};
