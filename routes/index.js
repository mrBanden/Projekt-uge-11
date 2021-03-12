var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res, next) {
  res.render('books', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});

module.exports = router;
