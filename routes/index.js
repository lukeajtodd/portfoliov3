var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'LUKE TODD',
      articles: {
          articleOne: {
              title: 'Les Paul Review',
              image: 'http://www.fillmurray.com/g/260/100',
              content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.',
              created: '17th July - 2016'
          },
          articleTwo: {
              title: 'Lombardis Restaurant Sucks',
              content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.',
              created: '17th July - 2016'
          },
          articleThree: {
              title: 'The future is here - Sprockets',
              image: 'http://www.fillmurray.com/260/100',
              content: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.',
              created: '17th July - 2016'
          }
      }
   });
});

router.get('/work', function(req, res, next) {
  res.render('work', {
      title: 'LUKE TODD',
      work: {
          ashadegreener: {
              title: 'A Shade Greener',
              url: 'https://www.ashadegreener.co.uk',
              screengrab: "http://www.fillmurray.com/260/220",
          },
          getgovgrants: {
              title: 'Free Boiler Grants',
              url: 'https://www.getgovgrants.org.uk',
              screengrab: 'http://www.fillmurray.com/260/220'
          },
          quickquotes: {
              title: 'Quick Quotes Concept',
              url: '',
              screengrab: 'http://www.fillmurray.com/260/220'
          }
      }
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
