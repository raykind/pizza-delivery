import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import MenuPage from "./pages/menu/MenuPage";
import AuthPage from "./pages/auth/AuthPage";
import Navbar from "./components/navbar/Navbar";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/menu" exact>
            <MenuPage />
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
