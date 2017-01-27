//requirements
var passport = require('passport');
var request = require("request");
var myURL = 'http://phish.net/setlists/?year=2014&month=11';

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
	response.redirect('/');
	//response.send({ScrtMsg: "I kissed a girl and I liked it"});
};

// GET /index
function index(request, response) {
	response.render('index.ejs');
};

// GET /setlists
function setlists(request, response) {
	response.render('setlists.ejs');
};

// GET /mysongs
function mysongs(request, response) {
	response.render('mysongs.ejs');
};


// GET /show
function show(req, response) {
	function renderShowPage(body4) {
		response.render('show.ejs', {body4: body4});

	}
	var result = req.query;
	//console.log(result.selectYear);
	var matchDate = (result.selectYear + "-" + result.selectMonth + "-" + result.selectDay);
	var flag = "setlist-container";
	var flag2 = "setlist-notes";

	var realURL = 'http://phish.net/setlists/?year=' + result.selectYear + '&month=' + result.selectMonth; 

	var twoShows = request(realURL, function(error, response, body) {
		//plastic surgeons office
		var body1 = response.body;
		var marker1 = body1.search(flag);
		var body2 = body1.slice(marker1, body1.length);
		var marker2 = body2.search(matchDate);
		var body3 = body2.slice((marker2 + 16), body2.length);
		var marker3 = body3.search(flag2);
		var body4 = body3.slice(0, (marker3 - 12));
		console.log(body4);




		renderShowPage(body4);
		})
};

// GET /myshows
function myshows(request, response) {
	response.render('myshows.ejs');
	//retrieve();
};

//prettifies the incoming JSON, not to be used
function convertSet(json) {
	document.write("<div id=\"pnetsetlist\">");
	for(i = 0; i < json.length; i++) {
		var n = json[i];
		document.write("<h3>" + n['mmddyy'] + " <a href=\"http://phish.net/setlists/?d=" + n['showdate'] + "\">" + n['venue'] + "</a></h3> <p class='pnetsl'>" + n['setlistdata'] + "</p>");
		if(n['setlistnotes'].replace(/^\s+|\s+$/g,"")!='') {
			document.write("<p class='pnetsn' style=\"font-size:10px;\">" + n['setlistnotes'] + "</p>");
		};
	};
	document.write("</div>");
};

//grabs content from API
var retrieve = function() {
	var showData = request(myURL, function(error, response, body) {
		//showData();
		console.log(response.body);
		//console.log(JSON.parse(response));
		
	});
};

//exporting functions
module.exports = {
	getLogin: getLogin,
	postLogin: postLogin,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogout: getLogout,
	secret: secret,
	setlists: setlists,
	index: index,
	myshows: myshows,
	mysongs: mysongs,
	show: show,
	retrieve: retrieve,
	//converter: converter,
};






