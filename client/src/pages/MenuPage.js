import React from "react";
import {connect} from "react-redux";

const MenuPage = ({ token }) => {
  console.log('Token', token)
  return (
    <h1>Menu Page</h1>
  )
}

const mapStateToProps = state => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(MenuPage)
