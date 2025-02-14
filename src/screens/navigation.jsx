import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomeScreen } from "./home";
import { LoginScreen } from "./oauth/login";
import { StoreScreen } from "./store";
import { DetailScreen } from "./store/detail";
import { CartScreen } from "./cart";
import {
  CheckoutFormSimpleScreen,
  CheckoutFormHooksScreen,
  CheckoutFormSchemaScreen,
} from "./checkout";
import { NotFoundScreen } from "./not-found";

export const Navigation = () => (
  <Switch>
    <Route exact path="/oauth/login" component={LoginScreen} />
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/store" component={StoreScreen} />
    <Route exact path="/product/:id" component={DetailScreen} />
    <Route exact path="/cart" component={CartScreen} />
    <Route
      exact
      path="/checkout/form-simple"
      component={CheckoutFormSimpleScreen}
    />
    <Route
      exact
      path="/checkout/form-hooks"
      component={CheckoutFormHooksScreen}
    />
    <Route
      exact
      path="/checkout/form-schema"
      component={CheckoutFormSchemaScreen}
    />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);
