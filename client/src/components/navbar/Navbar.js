import React from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {logout} from "../../redux/actions";

const Navbar = ({ token, logout }) => {
  const history = useHistory()

  const logoutHandler = event => {
    event.preventDefault()
    logout()
    history.push('/')
  }

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple accent-1" style={{ padding: '0 2rem'}}>
          <span className="brand-logo">Innoscripta Pizza Delivery Service</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/cart">Cart</NavLink></li>
            { token && <li><NavLink to="/orders">Your Orders</NavLink></li> }
            { token && <li><a href="/" onClick={logoutHandler}>Log Out</a></li> }
          </ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  token: state.token
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
