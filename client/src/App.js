import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import 'materialize-css'
import {useRoutes} from "./routes";
import {connect} from "react-redux";
import {login} from "./redux/actions";

const App = ({ token, login }) => {
  const data = JSON.parse(localStorage.getItem('userData'))

  if (data && data.token) {
    login({token: data.token, userId: data.userId})
  }

  const isAuthenticated = !!token || !!(data && data.token)
  const routes = useRoutes(isAuthenticated);

  return (
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    token: state.token,
    pizza: state.pizza
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
