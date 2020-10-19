import React from "react";
import {useHistory} from 'react-router-dom'
import './Bill.scss'
import {useDispatch} from "react-redux";
import {clearCart} from "../../redux/actions";

const Bill = ({ total, address, pizzaDetails }) => {
  const history = useHistory()
  const dispatch = useDispatch();

  const goToCatalog = () => {
    history.push('/menu')
    dispatch(clearCart())
  }

  return (
    <div className="bill">
      <h2>Your order has been moved to delivery service</h2>
      <h3>Thank you for choosing us!</h3>
      <h5>Here is your bill:</h5>
      <div className="bill-details">
        <h6>Address:</h6>
        <div className="address">
          {address.country ? address.country + ', ': ''}
          {address.district ? address.district + ' district, ': ''}
          {address.city ? address.city + ', ': ''}
          {address.street ? address.street + ' st, ': ''}
          {address.building ? address.building + ' building, ': ''}
          {address.flat ? address.flat + ' flat, ': ''}
          {address.room ? address.room + ' room': ''}
        </div>
        <h6>Pizza details:</h6>
        <div className="pizza-details">
          {pizzaDetails.map(pizza => {
            return <span className="pizza-row"
            >pizza: {pizza.name}, weight: {pizza.weight}, cost: {pizza.cost}
            </span>
          })}
        </div>
        <h5>Total: {total}$</h5>
      </div>
      <button
        className="waves-effect waves-light purple darken-4 catalog-btn btn"
        onClick={goToCatalog}
      >return to catalog</button>
    </div>
  )
}

export default Bill
