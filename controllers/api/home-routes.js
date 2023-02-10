const router = require('express').Router();
const { BlogPosts, post } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogPostsData = await BlogPosts.findAll({
      include: [
        {
          model: post,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const posts = dbBlogPostsData.map((BlogPosts) =>
      BlogPosts.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one BlogPosts
router.get('/BlogPosts/:id', async (req, res) => {
  try {
    const dbBlogPostsData = await BlogPosts.findByPk(req.params.id, {
      include: [
        {
          model: post,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const BlogPosts = dbBlogPostsData.get({ plain: true });
    res.render('BlogPosts', { BlogPosts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const dbpostData = await post.findByPk(req.params.id);

    const post = dbpostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
