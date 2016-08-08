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
              description: 'A money saving and deals website. I personally worked on the forms and multiple aspects of the UI.',
              screengrab: '/images/ashadegreener.png',
              mobile_screengrab: '/images/ashadegreener-mobile.png'
          },
          getgovgrants: {
              title: 'Free Boiler Grants',
              url: 'https://www.getgovgrants.org.uk',
              description: 'A website for free boiler grants. Front end custom built using the Foundation framework and the back-end using Laravel.',
              screengrab: '/images/getgovgrants.png',
              mobile_screengrab: '/images/getgovgrants-mobile.png'
          },
          quickquotes: {
              title: 'Quick Quotes Concept',
              url: '',
              description: 'This was the beginning of a site for window quotes. The app uses javascript and some jQuery sortable drag and drop effects.',
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
