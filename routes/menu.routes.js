const {Router} = require('express')
const Pizza = require('../models/Pizza')
const router = new Router()


router.get('/getAllPizza', async (req, res) => {
  try {
    const allPizza = await Pizza.find()
    res.json(allPizza)
  } catch (e) {
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
  }
})

module.exports = router
