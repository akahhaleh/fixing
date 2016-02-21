
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// basics
var landing = require('./routes/landing');
var signUp = require('./routes/sign-up');
var login = require('./routes/login');
var howItWorks = require('./routes/how-it-works');
var help = require('./routes/help');
// listings
var search = require('./routes/search');
var allListings = require('./routes/all-listings');
var listing = require('./routes/listing');
var entireHome = require('./routes/entire-home');
// locales
var listYourSpace = require('./routes/list-your-space');
// refugees
var apply = require('./routes/apply');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// basics pages
app.get('/', landing.view);
app.get('/sign-up', signUp.view);
app.get('/login', login.view);
app.get('/how-it-works', howItWorks.view);
app.get('/help', help.view);
// listings pages
app.get('/search', search.view);
app.get('/all-listings', allListings.view);
app.get('/listing', listing.view);
app.get('/entire-home', entireHome.view);
// locales pages
app.get('/list-your-space', listYourSpace.view);
// refugees pages
app.get('/apply', apply.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
