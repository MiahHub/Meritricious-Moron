const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Travel',
    content: '10 Great Spots in Utah',
  },
  {
    name: 'Fashion',
    content: 'Mom Jeans - Back Again',
  },
  {
    name: 'Food',
    content: 'State Fair - Thr Rise of the Corn Dog',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
