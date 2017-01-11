var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      work: {
          preactImageGallery: {
              title: 'Preact Image Gallery',
              url: '#',
              description: 'Photo gallery using Preact, the Imgur API and some lazy loading.',
              screengrab: '/images/gallerysc.jpg'
          },
          getgovgrants: {
              title: 'Colour List Tool',
              url: '#',
              description: 'A React & Firebase tool to pick and save colour palettes.',
              screengrab: 'https://www.fillmurray.com/700/240'
          }
      },
      colours: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#795548",
        "#9E9E9E",
        "#607D8B"
      ]
   });
});

module.exports = router;
