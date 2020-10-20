import React, {useEffect, useState} from "react";
import './Orders.scss'
import {connect, useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import {Loader} from "../../components/loader/Loader";
import OrderBox from "../../components/order-box/OrderBox";
import {getAllPizza} from "../../redux/actions";

const Orders = ({ userId, pizza, getAllPizza }) => {
  const [orders, setOrders] = useState([])
  const {request} = useHttp()
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchOrders() {
      const fetchedOrders = await request('/api/orders/getAll', 'POST', {
        userId
      })

      if (!orders.length) {
        setOrders(fetchedOrders)
      }
    }

    if (!pizza.length) {
      dispatch(getAllPizza(request))
    }

    fetchOrders()
  }, [])

  if (!orders.length) {
    return <Loader />
  }

  return (
    <div className="orders-area">
      <h3>Your orders</h3>
      {orders.map(order => {
        return <OrderBox order={order} key={order._id} />
      })}
    </div>
  )
}

const mapStateToProps = state => ({
  userId: state.userId,
  pizza: state.pizza
})

const mapDispatchToProps = {
  getAllPizza
}

export default connect(mapStateToProps)(Orders)
