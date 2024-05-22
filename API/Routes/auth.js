const router = require('express').Router()
const User = require('../Models/user')
const bcrypt = require('bcrypt')

// Register
router.post('/register', async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    })

    //save user and respond
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).send('User not found')
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    )
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password')
    }
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

module.exports = router
