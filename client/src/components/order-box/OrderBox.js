import React from "react";
import './OrderBox.scss'
import {connect} from "react-redux";

const OrderBox = ({ order, pizza }) => {
  return (
    <div className="order-box">
      <span>Address: {order.address}</span>
      <span>Total: {order.total}$</span>
      <h6>Pizza:</h6>
      {order.order.map(pizzaId => {
        const currentPizza = pizza.find(item => item._id === pizzaId)
        return <div className="pizza-row" key={pizzaId}>
          <img src={currentPizza.photoUrl} alt=""/>
          <span className="pizza-name">{currentPizza.name}</span>
          <span className="pizza-weight">{currentPizza.weight}g</span>
          <span className="pizza-cost purple darken-4">{currentPizza.cost}$</span>
        </div>
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  pizza: state.pizza
})


export default connect(mapStateToProps)(OrderBox)
