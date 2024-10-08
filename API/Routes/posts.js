const router = require('express').Router()
const Post = require('../Models/post')
const User = require('../Models/user')

//create a post

router.post('/', async (req, res) => {
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (err) {
    res.status(500).json(err)
  }
})
//update a post

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body })
      res.status(200).json('the post has been updated')
    } else {
      res.status(403).json('you can update only your post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})
//delete a post

router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await post.deleteOne()
      res.status(200).json('the post has been deleted')
    } else {
      res.status(403).json('you can delete only your post')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//like / dislike a post

router.put('/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } })
      res.status(200).json('The post has been liked')
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } })
      res.status(200).json('The post has been disliked')
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

//get a post

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    res.status(500).json(err)
  }
})

//get timeline posts

router.get('/timeline/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId)
    const userPosts = await Post.find({ userId: currentUser._id })

    if (
      Array.isArray(currentUser.followings) &&
      currentUser.followings.length > 0
    ) {
      const friendPosts = []
      for (const friendId of currentUser.followings) {
        const posts = await Post.find({ userId: friendId })
        friendPosts.push(posts)
      }
      const timelinePosts = userPosts.concat(friendPosts)
      res.status(200).json(timelinePosts)
    } else {
      res.status(200).json(userPosts)
    }
  } catch (err) {
    console.error('Error fetching timeline:', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

//get user's all posts

router.get('/profile/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username })
    const posts = await Post.find({ userId: user._id })
    res.status(200).json(posts)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
