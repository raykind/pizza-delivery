import React, {useState} from "react";
import {connect} from "react-redux";
import Address from "../../components/address/Address";
import Bill from "../../components/bill/Bill";

const MakeOrder = ({ cart }) => {
  const savedCart = cart;
  const [isComplete, setIsComplete] = useState(false)
  const [address, setAddress] = useState(null)


  const total = cart.reduce((sum, pizza) => {
    return sum + pizza.cost
  }, 0)

  const onAddressFilled = addressObject => {
    setIsComplete(true)
    setAddress(addressObject)
  }

  if (!isComplete) {
    return <Address total={total} setAddress={onAddressFilled}/>
  }

  return <Bill address={address} pizzaDetails={savedCart} total={total}/>
}

const mapStateToProps = state => ({
  cart: state.cart
})
export default connect(mapStateToProps)(MakeOrder)
