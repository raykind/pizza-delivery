const {Router} = require('express')
const Order = require('../models/Order')
const router = Router()

// /api/orders/save
router.post(
  '/save',
  [],
  async (req, res) => {
    try {
      const {address, order, total, userId} = req.body

      await new Order({address, order, total, userId}).save()

      res.status(201).json({message: 'Order saved'})
    } catch (e) {
      res.status(500).json({ message: 'Something goes wrong, try again later' })
    }
  }
)
// /api/orders/getAll
router.post(
  '/getAll',
  [],
  async (req, res) => {
    try {
      const {userId} = req.body

      const orders = await Order.find({userId})

      res.status(201).json(orders)
    } catch (e) {
      res.status(500).json({ message: 'Something goes wrong, try again later' })
    }
  }
)


module.exports = router
