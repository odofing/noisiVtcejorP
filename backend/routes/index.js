const router = require('express').Router()

const { createPost, getPosts } = require('../controllers/index')

router.post('/', createPost)

router.get('/', getPosts)

module.exports = router
