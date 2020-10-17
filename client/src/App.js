import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import 'materialize-css'
import {useRoutes} from "./routes";
import {connect, useDispatch} from "react-redux";
import {getAllPizza, login} from "./redux/actions";
import {useHttp} from "./hooks/http.hook";
import {Loader} from "./components/loader/Loader";

const App = ({ token, pizza, login }) => {
  const data = JSON.parse(localStorage.getItem('userData'))

  if (data && data.token) {
    login({token: data.token, userId: data.userId})
  }

  const dispatch = useDispatch()
  const {request} = useHttp()

  useEffect(() => {
    dispatch(getAllPizza(request))
  }, [dispatch, request])

  const isAuthenticated = !!token || !!data.token
  const routes = useRoutes(isAuthenticated);

  if (!pizza.length) {
    return <Loader />
  }

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
