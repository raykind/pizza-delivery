import React from "react"
import './PizzaCard.scss'

export const PizzaCard = ({ pizza }) => {
  return (
    <div className="pizza-box indigo lighten-5 z-depth-1">
      <div className="row">
        <div className="left-part">
          <span className="pizza-title">{pizza.name}</span>
          <span className="pizza-description">{pizza.description}</span>
        </div>
        <div className="right-part">
          <img className="pizza-image" src={pizza.photoUrl} alt="" />
          <div className="row pizza-measures">
            <span className="pizza-cost">cost: <b>{pizza.cost}$</b></span>
            <span className="pizza-weight">weight: <b>{pizza.weight}g</b></span>
          </div>
          <button className="waves-effect waves-light deep-purple accent-1 btn">add to cart</button>
        </div>
      </div>
    </div>
  )
}
