const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../Models/user')

//Update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(req.body.password, salt)
      } catch (error) {
        return res.status(500).json('In')
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body
      })
      res.status(200).json('ACCOUNT HAS BEEN UPDATED')
    } catch (error) {
      return res.status(400).json('In')
    }
  } else {
    res.status(403).json('You can update only your account')
  }
})

//Delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('ACCOUNT HAS BEEN DeleteD')
    } catch (error) {
      return res.status(400).json('In')
    }
  } else {
    res.status(403).json('You can Delete only your account')
  }
})

//Get user
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Account not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Invalid user ID', error });
    }
  });
  
//Follow
//Unfollow

module.exports = router
