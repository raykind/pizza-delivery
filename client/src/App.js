import React, {useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import 'materialize-css'
import {useRoutes} from "./routes";
import {connect, useDispatch} from "react-redux";
import {login} from "./redux/actions";

const App = ({ token }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))

    if (data && data.token) {
      dispatch(login({token: data.token, userId: data.userId}))
    }
  }, [dispatch])


  const isAuthenticated = !!token
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
    token: state.token
  }
}

export default connect(mapStateToProps)(App)
