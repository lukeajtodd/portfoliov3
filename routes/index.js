var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      work: {
          preactImageGallery: {
              title: 'Preact Image Gallery',
              url: '#',
              description: 'Image gallery for some of my photographs using Preact and the Imgur API.',
              screengrab: 'http://www.fillmurray.com/240/240',
              mobile_screengrab: '#'
          },
          getgovgrants: {
              title: 'Colour List Tool',
              url: '#',
              description: 'A React & Firebase tool to pick and save colour palettes.',
              screengrab: 'https://www.fillmurray.com/240/240',
              mobile_screengrab: '#'
          }
      }
   });
});

module.exports = router;
