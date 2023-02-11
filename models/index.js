const User = require('./User');
const Gallery = require('./Gallery');
const Post = require('./Post');

Gallery.hasMany(Post, {
  foreignKey: 'gallery_id',
});

Post.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Post };
