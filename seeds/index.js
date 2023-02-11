const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedPosts = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedPosts();

  process.exit(0);
};

seedAll();
