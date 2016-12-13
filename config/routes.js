var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var methodOverride = require('method-override');
var passport = require('passport');
var usersController = require('../controllers/users');
var staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/');
};

router.route('/')
	.get(staticsController.home);

router.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

router.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin)

router.route('/logout')
	.get(usersController.getLogout)

router.route('/setlists')
	.get(usersController.setlists)

//router.route('/secret')
//	.get(authenticatedUser.usersController.secret)

module.exports = router;






