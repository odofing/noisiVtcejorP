const Post = require('../models/index')

const createPost = async (req, res) => {
  const newPost = new Post(req.body)
  const { email } = newPost

  try {
    // check if email exists
    const postExists = await Post.findOne({ email })
    if (postExists) {
      return res.status(400).json({
        message: 'Email already exists, Please register with a different email',
      })
    } else {
      const savedPost = await newPost.save()

      return res.status(200).json({ message: 'post was successfull' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'server error, please try again' })
  }
}

// GET Posts
const getPosts = async (req, res) => {
  const post = await Post.find({})

  if (post) {
    return res.status(200).json(post)
  } else {
    return res.status(404).json({ message: 'Posts not found' })
  }
}

module.exports = { createPost, getPosts }
