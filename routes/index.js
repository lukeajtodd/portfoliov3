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
              screengrab: '/images/gallerysc.jpg',
              mobile_screengrab: '#'
          },
          getgovgrants: {
              title: 'Colour List Tool',
              url: '#',
              description: 'A React & Firebase tool to pick and save colour palettes.',
              screengrab: 'https://www.fillmurray.com/700/240',
              mobile_screengrab: '#'
          }
      }
   });
});

module.exports = router;
