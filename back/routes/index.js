var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('home page');
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/user/:userId', (req, res) => {
  res.send(req.params);
});

module.exports = router;
