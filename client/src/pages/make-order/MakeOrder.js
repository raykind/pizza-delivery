import React, {useState} from "react";
import {connect} from "react-redux";
import Address from "../../components/address/Address";
import Bill from "../../components/bill/Bill";
import {useHttp} from "../../hooks/http.hook";

const MakeOrder = ({ cart, userId, token }) => {
  const savedCart = cart;
  const { request } = useHttp();
  const [isComplete, setIsComplete] = useState(false)
  const [address, setAddress] = useState(null)


  const total = cart.reduce((sum, pizza) => {
    return sum + pizza.cost
  }, 0)

  const onAddressFilled = async addressObject => {
    const addressStr = '' + (addressObject.country ? addressObject.country + ', ': '') +
      (addressObject.district ? addressObject.district + ' district, ': '') +
      (addressObject.city ? addressObject.city + ', ': '') +
      (addressObject.street ? addressObject.street + ' st, ': '') +
      (addressObject.building ? addressObject.building + ' building, ': '') +
      (addressObject.flat ? addressObject.flat + ' flat, ': '') +
      (addressObject.room ? addressObject.room + ' room': '')
    setIsComplete(true)
    setAddress(addressStr)

    const orderData = {
      address: addressStr,
      total,
      userId,
      order: []
    }

    orderData.order = cart.map(pizzaItem => {
      return pizzaItem._id
    })

    await request('/api/orders/save', 'POST', {
      ...orderData
    })
  }

  if (!isComplete) {
    return <Address total={total} setAddress={onAddressFilled}/>
  }

  return <Bill address={address} pizzaDetails={savedCart} total={total}/>
}

const mapStateToProps = state => ({
  cart: state.cart,
  token: state.token,
  userId: state.userId
})

export default connect(mapStateToProps)(MakeOrder)
