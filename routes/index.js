var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'LUKE TODD',
      work: {
          ashadegreener: {
              title: 'A Shade Greener',
              url: 'https://www.ashadegreener.co.uk',
              description: 'A money saving and deals website. Blade Templates, Foundation 6, Sass, jQuery, Laravel.',
              screengrab: '/images/ashadegreener.png',
              mobile_screengrab: '/images/ashadegreener-mobile.png'
          },
          getgovgrants: {
              title: 'Free Boiler Grants',
              url: 'https://www.getgovgrants.org.uk',
              description: 'A website for free boiler grants. Front-end built using Foundation 6 and the back-end using Laravel.',
              screengrab: '/images/getgovgrants.png',
              mobile_screengrab: '/images/getgovgrants-mobile.png'
          },
          quickquotes: {
              title: 'Quick Quotes Concept',
              url: '#',
              description: 'jQuery/Javascript app. Working on temporary hosting as the site was never finished.',
              screengrab: '/images/quickquotes.png',
              mobile_screengrab: ''
          }
      }
   });
});

// router.get('/work', function(req, res, next) {
//   res.render('work', {
//       title: 'LUKE TODD',
//       work: {
//           ashadegreener: {
//               title: 'A Shade Greener',
//               url: 'https://www.ashadegreener.co.uk',
//               screengrab: "http://www.fillmurray.com/260/220",
//           },
//           getgovgrants: {
//               title: 'Free Boiler Grants',
//               url: 'https://www.getgovgrants.org.uk',
//               screengrab: 'http://www.fillmurray.com/260/220'
//           },
//           quickquotes: {
//               title: 'Quick Quotes Concept',
//               url: '',
//               screengrab: 'http://www.fillmurray.com/260/220'
//           }
//       }
//   });
// });

module.exports = router;
