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

router.get('/bookcopiesform/:bks', async function(req, res, next) {
  let books = await handlebooks.getBookcopies({}, {sort: {title: 1}});
  res.json(books);
});

router.get('/bookcopiesform', function(req, res, next) {
  res.render('bookcopiesform', {title: TITLE, subtitle: 'Bookcopies form' });
});

router.post('/bookcopiesform', function(req, res, next) {
  handlebookcopies.postBookcopies(req, res, next);
  res.redirect('/showbookcopies');
});

//Login 

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});
router.post('/login', async function(req, res, next) {
controllers.login(req)
  .then( function (rc) {
    if (!rc)
      res.render('login', { title: 'Login', tf: "misery", returnCode: rc }); // tf hvis bruger ikke findes misery
    else	
      res.render('login', { title: 'Login', tf: "success",  returnCode: rc });
  });
});
module.exports = router;
