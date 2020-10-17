import React, {useEffect, useState} from "react"
import './PizzaCard.scss'
import {connect} from "react-redux";
import {addToCart, removeFromCart} from "../../redux/actions";

const PizzaCard = ({ pizza, addToCart, removeFromCart }) => {
  const [isAdded, setIsAdded] = useState(false)

  const onAddClickHandler = () => {
    if (isAdded) {
      removeFromCart(pizza)
    } else {
      addToCart(pizza)
    }
    setIsAdded(!isAdded)
  }

  useEffect(() => {
    const cartPizzaIds = JSON.parse(localStorage.getItem('cartPizzaIds'))

    if (cartPizzaIds && cartPizzaIds.length) {
      if (cartPizzaIds.findIndex(id => id === pizza._id) !== -1) {
        setIsAdded(true)
      }
    }
  }, [pizza, addToCart])

  return (
    <div className="pizza-box z-depth-1">
      <div className="row">
        <div className="left-part">
          <span className="pizza-title">{pizza.name}</span>
          <span className="pizza-description">{pizza.description}</span>
          <span className="pizza-weight">{pizza.weight}g</span>
        </div>
        <div className="right-part">
          <div className="pizza-image">
            <img  src={pizza.photoUrl} alt="" />
          </div>
          <button
            className={`waves-effect waves-light btn add-to-cart-btn 
              ${isAdded ? 'light-green darken-1' : 'purple darken-4'}`
            }
            onClick={onAddClickHandler}
          >
          {
            isAdded
            ? <>added</>
            : <>add to cart: +<b>{pizza.cost}$</b></>
          }
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

export default connect(null, mapDispatchToProps)(PizzaCard)
