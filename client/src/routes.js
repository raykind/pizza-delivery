import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import MenuPage from "./pages/menu/MenuPage";
import AuthPage from "./pages/auth/AuthPage";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import MakeOrder from "./pages/make-order/MakeOrder";
import Orders from "./pages/orders/Orders";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/menu" exact>
            <MenuPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/make-order">
            <MakeOrder />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Redirect to="/menu" />
        </Switch>
      </>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
