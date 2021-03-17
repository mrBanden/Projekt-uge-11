var express = require('express');
var router = express.Router();
const TITLE = 'Library Project';
const handlebooks = require('../models/handleBooks');
const handleuser = require('../models/handleUser');
const handlebookcopies = require('../models/handlebookcopies');
const login = require('../models/login');
// Require til handlers m.m.

//Get home page
router.get('/', function(req, res, next){
    res.render('index', {
                  title: TITLE, 
                  subtitle: 'Front Page',
                  authenticated: req.session && req.session.authenticated});
});

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/showbooks', async function(req, res, next) {
  let books = await handlebooks.getBooks({}, {sort: {title: 1}});
  let bookcopies = await handlebookcopies.getBookcopies({}, {sort: {title: 1}});
  res.render('showbooks', { title: TITLE, subtitle: 'Display Books', books });
});

router.post('/showbooks', async function(req, res, next) {
  let books = await handlebooks.getBooks();
});

router.get('/bookform', function(req, res, next) {
  res.render('bookform', {title: TITLE, subtitle: 'Book Entry Form' });
});

router.post('/bookform', async function(req, res, next) {
  await handlebooks.postBooks(req, res, next);
  res.redirect('/showbooks');
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

// Login
router.get('/', function(req, res, next){
  res.render('login', {title: TITLE, subtitle: 'Login'});
});

router.post('/', async function(req, res, next) {
await login.getLogin(req)
  .then( function (rc) {
    if (!rc)
      res.render('index', { title: 'Login', tf: "Login failed", returnCode: rc }); // tf hvis bruger ikke findes = misery
    else	
      res.render('index', { title: 'Login', tf: "Logged in successfully",  returnCode: rc });
      //session her
  });
});

//Logud
router.get('/', function(req, res, next){
  req.session.destroy();
  res.redirect('/');
})

//Reserve and loan books
router.get('/', async function(req, res, next){
  let books = await handleBooks.getBooks({}, {sort: {title: 1}});
  res.render('loan', {title: TITLE,subtitle: 'Display Books for Loan', books});
});
router.get('/', async function(req, res, next){
  let books = await handleBooks.getBooks({}, {sort: {title: 1}});
  res.render('', {title: TITLE, subtitle: 'Display Books for Reservation', books});
})


/*Bookcopies
router.get('/showbookcopies', async function(req, res, next) {
  let bookcopies = await handlebookcopies.getBookcopies({}, {sort: {title: 1}});
  res.render('showbookcopies', { title: TITLE, subtitle: 'Display Copies', bookcopies});
});

router.post('/showbookcopies', async function(req, res, next) {
  let bookcopies = await handlebookcopies.getBookcopies();
});

router.get('/bookcopiesform/:bks', async function(req, res, next) {
  let books = await handlebooks.getBooks({}, {sort: {title: 1}});
  res.json(books);
});

router.get('/bookcopiesform', function(req, res, next) {
  res.render('bookcopiesform', {title: TITLE, subtitle: 'Bookcopies form' });
});

router.post('/bookcopiesform', function(req, res, next) {
  handlebookcopies.postBookcopies(req, res, next);
  res.redirect('/showbookcopies');
});*/

module.exports = router;
