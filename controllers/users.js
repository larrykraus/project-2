var passport = require('passport');

// GET /signup
function getSignup(request, response) {
	response.render('signup.ejs', {message: request.flash('signupMesage')});
};

// POST /signup
function postSignup(request, response) {
	var signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failtureFlash: true
	});
	return signupStrategy(request, response);
};

// GET /login
function getLogin(request, response) {
	response.render('login.ejs', {message: request.flash('loginMessage')});
};

// POST /login
function postLogin(request, response) {
	var loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failtureFlash: true
	});
	return loginStrategy(request, response);
};

// GET /logout
function getLogout(request, response) {
	request.logout();
	response.redirect('/');
};

// Secret page
function secret(request, response) {
	response.send({ScrtMsg: "I kissed a girl and I liked it"});
};

module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret
}


































