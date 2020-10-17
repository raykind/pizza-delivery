import React from "react";
import './PizzaCartRow.scss'

const PizzaCartRow = ({ pizza, onDelete }) => {
  return (
    <div className="row pizza-cart-row">
      <div className="pizza-description z-depth-1">
        <img className="pizza-image" src={pizza.photoUrl} alt="" />
        <span className="pizza-name">{pizza.name}</span>
        <span className="pizza-weight">{pizza.weight}g</span>
        <div className="pizza-cost purple darken-4"><b>{pizza.cost}$</b></div>
        <div className="spacer"/>
        <button
          className="waves-effect waves-light red darken-1 delete-btn btn"
          onClick={onDelete}
        >delete</button>
      </div>
    </div>
  )
}

export default PizzaCartRow
