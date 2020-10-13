const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router = Router()

// /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Email is incorrect').isEmail(),
    check('password', 'Length of password must be at least 6 symbols')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data of registration fields'
        })
      }

      const {email, password} = req.body

      const candidate = await User.findOne({email})

      if (candidate) {
        return res.status(400).json({message: 'This user is already exist'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const newUser = new User({email, password: hashedPassword})

      await newUser.save()

      res.status(201).json({message: 'User has been successfully created'})

    } catch (e) {
      res.status(500).json({ message: 'Something goes wrong, try again later' })
    }
  }
)

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Type correct Email').normalizeEmail().isEmail(),
    check('password', 'Type password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect data while login'
        })
      }

      const {email, password} = req.body

      const user = await User.findOne({email})

      if (!user) {
        return res.status(400).json({message: 'User is not found'})
      }

      const isPasswordsMatch = await bcrypt.compare(password, user.password)

      if (!isPasswordsMatch) {
        return res.status(400).json({message: 'Incorrect password, try again'})
      }

      const token = jwt.sign(
        {userId: user.id},
        config.get('jwtSecret'),
        {expiresIn: '1h'}
      )

      res.json({token, userId: user.id})

    } catch (e) {
      res.status(500).json({message: 'Something goes wrong, try again later'})
    }
  })

module.exports = router
