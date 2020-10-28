import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import MenuPage from "./pages/menu/MenuPage";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import MakeOrder from "./pages/make-order/MakeOrder";
import Orders from "./pages/orders/Orders";
import AuthPage from "./pages/auth/AuthPage";

export const useRoutes = () => {
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
        <Route path="/login">
          <AuthPage />
        </Route>
        <Redirect to="/menu" />
      </Switch>
    </>
  )
}
