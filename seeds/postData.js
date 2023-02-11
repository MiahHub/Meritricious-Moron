const { Posts } = require('../models');

const postdata = [
  {
    username: 'testuser',
    gallery_id: '2',
    title: 'test post title',
    content: 'this is my blog content here',
  },
  {
    username: 'maria',
    gallery_id: '3',
    title: 'maria post title',
    content: 'Maria posta about food',
  },
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;
