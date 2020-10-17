import React from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {connect} from "react-redux";
import {logout} from "../../redux/actions";
import './Navbar.scss'

const Navbar = ({ token, cart, logout }) => {
  const history = useHistory()

  const logoutHandler = event => {
    event.preventDefault()
    logout()
    history.push('/')
  }

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple accent-1">
          <span className="brand-logo">Innoscripta Pizza Delivery Service</span>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/cart">Cart{
              cart.length
                ? <span className="order-count">{cart.length}</span>
                : ''
            }</NavLink></li>
            { token && <li><NavLink to="/orders">Your Orders</NavLink></li> }
            { token && <li><a href="/" onClick={logoutHandler}>Log Out</a></li> }
          </ul>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  token: state.token,
  cart: state.cart
})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
