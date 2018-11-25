const express = require('express');
const Router = express.Router;
const router = Router();
const { Post } = require('../models/Post');

// Get Posts
router.get('/', async(req, res, next) => {
  try {
    const docs = await Post.find().populate('user');

    res.status(200).send({
      data: docs
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:post_id', async(req, res, next) => {
  const postId = req.params.post_id;
  try {
    const docs = await Post.findById(postId).populate('user').populate('comments.user');

    res.status(200).send({
      data: [docs]
    })

  } catch (err) {
    next(err)
  }
})

module.exports = router;