import React, {useCallback, useEffect, useState} from "react";
import {connect} from "react-redux";
import './Cart.scss'
import {addToCart, removeFromCart} from "../../redux/actions";
import PizzaCartRow from "../../components/pizza-cart-row/PizzaCartRow";

const Cart = ({ cart, pizza, addToCart, removeFromCart }) => {
  useEffect(() => {
    if (!cart.length) {
      const cartPizzaIds = JSON.parse(localStorage.getItem('cartPizzaIds'))

      if (pizza.length && cartPizzaIds && cartPizzaIds.length) {
        cartPizzaIds.forEach(pizzaId => {
          addToCart(pizza.find(item => item._id === pizzaId))
        })
      }
    }
  }, [addToCart, cart, pizza])

  const deletePizza = pizzaId => {
    removeFromCart(pizza.find(item => item._id === pizzaId))
    setTotal(recalculateTotal(pizzaId))
  }

  const recalculateTotal = useCallback((withoutPizzaId = null) => {
    return cart.reduce((sum, pizza) => {
      if (pizza._id === withoutPizzaId) {
        return sum
      }
      return sum + pizza.cost
    }, 0)
  }, [cart])

  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (cart.length) {
      if (total === 0) {
        setTotal(recalculateTotal())
      }
    }
  }, [cart, total, recalculateTotal])

  return (
    <div className="cart-page">
      {!cart.length
        ? <h2>Your cart is empty</h2>
        : (
          <>
            <h2>Cart</h2>
            <div className="cart-table">
              {cart.map(pizza =>
                <PizzaCartRow
                  pizza={pizza}
                  key={pizza._id}
                  onDelete={() => deletePizza(pizza._id)}
                />
              )}
            </div>
            <div className="row">
              <div className="spacer" />
              <h3>Total: ${total + 3}</h3>
              <h6>(3$ Delivery)</h6>
              <button
                className="waves-effect waves-light purple darken-4 order-btn btn"
              >make order</button>
            </div>
          </>
        )}

    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
  pizza: state.pizza
})

const mapDispatchToProps = {
  addToCart,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
