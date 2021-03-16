var express = require('express');
var router = express.Router();
const TITLE = 'Library Project';
const handlebooks = require('../models/handleBooks');
const handleuser = require('../models/handleUser');
const handlebookcopies = require('../models/handlebookcopies');
// Require til handler

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

//User

router.get('/showuser', async function(req, res, next) {
  let users = await handleuser.getUsers({}, {sort: {title: 1}});
  res.render('showuser', { title: TITLE, subtitle: 'Display User', users });
});

router.post('/showuser', async function(req, res, next) {
  let users = await handleuser.getUsers();
});

router.get('/userform', function(req, res, next) {
  res.render('userform', {title: TITLE, subtitle: 'User form' });
});

router.post('/userform', function(req, res, next) {
  handleuser.postUsers(req, res, next);
  res.redirect('/showuser');
});

//Bookcopies
router.get('/showbookcopies', async function(req, res, next) {
  let bookcopies = await handlebookcopies.getBookcopies({}, {sort: {title: 1}});
  res.render('showbookcopies', { title: TITLE, subtitle: 'Display Copies', bookcopies});
});

router.post('/showbookcopies', async function(req, res, next) {
  let bookcopies = await handlebookcopies.getBookcopies();
});

router.get('/bookcopiesform', function(req, res, next) {
  res.render('bookcopiesform', {title: TITLE, subtitle: 'Bookcopies form' });
});

router.post('/bookcopiesform', function(req, res, next) {
  handlebookcopies.postBookcopies(req, res, next);
  res.redirect('/showbookcopies');
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


