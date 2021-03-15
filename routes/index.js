var express = require('express');
var router = express.Router();
const TITLE = 'Library Project';
const handlebooks = require('../models/handleBooks');
//require til handler

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/showbooks', async function(req, res, next) {
  let books = await handlebooks.getBooks({}, {sort: {title: 1}});
  res.render('showbooks', { title: TITLE, subtitle: 'Display Books', books });
});

router.get('/bookform', function(req, res, next) {
  res.render('bookform', {title: TITLE, subtitle: 'Book Entry Form' });
});

router.post('/bookform', function(req, res, next) {
  handlebooks.postBooks(req, res, next);
  res.redirect('/showbooks');
});

router.post('/showbooks', async function(req, res, next) {
  let books = await handlebooks.getBooks();
});

module.exports = router;

/*router.post('/books', async function(req, res, next) {
	models.putUser(req)
		.then ( function (rc) {
			if (!rc)
				res.render('reguser', { title: 'Register User', returnCode: rc });
			else	
				res.redirect('/');
		});
});
*/
/* skal flyttes til users.js 
router.get('/users', function(req, res, next) {
  res.render('users', { title: 'Express' });
});
*/

/*
router.post("/books", function(req, res, next) {
    modBooks.getBooks(res, req.body.ctry);
});

router.get('/bookData', function(req, res, next) {
    res.render('bookData', {
        title: 'Register Books',
        subtitle: 'Enter Book Data'
    });
});
router.post("/bookData", function(req, res, next) {
    modBooks.postBooks(req, res, next);
});
*/


