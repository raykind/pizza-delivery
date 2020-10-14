import React, {useEffect} from "react";
import {getAllPizza} from "../../redux/actions";
import {connect, useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {Loader} from "../../components/loader/Loader";
import './MenuPage.scss'
import {PizzaCard} from "../../components/pizza-card/PizzaCard";

const MenuPage = ({ pizza }) => {
  const dispatch = useDispatch()
  const {request, error, clearError} = useHttp()
  const message = useMessage()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    dispatch(getAllPizza(request))
  }, [dispatch, request])

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
  pizza: state.pizza
})


export default connect(mapStateToProps)(MenuPage)
