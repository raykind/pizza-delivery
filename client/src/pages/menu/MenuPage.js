import React, {useEffect} from "react";
import {addToCart} from "../../redux/actions";
import {connect} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {Loader} from "../../components/loader/Loader";
import './MenuPage.scss'
import PizzaCard from "../../components/pizza-card/PizzaCard";

const MenuPage = ({ pizza, addToCart, cart }) => {
  const {error, clearError} = useHttp()
  const message = useMessage()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    const cartPizzaIds = JSON.parse(localStorage.getItem('cartPizzaIds'))

    if (pizza.length && cartPizzaIds && cartPizzaIds.length) {
      cartPizzaIds.forEach(pizzaId => {
        const pizzaObject = pizza.find(item => item._id === pizzaId)
        if (pizzaObject && cart.findIndex(item => item._id === pizzaObject._id) === -1) {
          addToCart(pizzaObject)
        }
      })
    }
  }, [pizza, cart, addToCart])


  if (!pizza.length) {
    return <Loader />
  }

  return (
    <div className="pizza-menu-window">
      <h2>Pizza Catalog</h2>
      <div className="pizza-catalog">
        {pizza.map(pizzaItem => <PizzaCard key={pizzaItem._id} pizza={pizzaItem} /> )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  pizza: state.pizza,
  cart: state.cart
})

const mapDispatchToProps = {
  addToCart
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuPage)
