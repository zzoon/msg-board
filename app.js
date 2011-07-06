
/**
 * Module dependencies.
 */

var express = require('express'),
	mongoose = require('mongoose'),
	mongodb = require('connect-mongodb');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({ store: mongodb(app.set('db-uri')), secret: 'topsecret' }));
  app.use(express.logger({ format: '\x1b[1m:method\x1b[0m \x1b[33m:url\x1b[0m :response-time ms' }))
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  app.set('db-uri', 'mongodb://localhost/msg-board-development');
  db = mongoose.connect(app.set('db-uri'));
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
  app.set('db-uri', 'mongodb://localhost/msg-board-production');
  db = mongoose.connect(app.set('db-uri'));
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

app.get('/list', function(req, res){
  res.render('list/index.jade', {
  });
});
// Only listen on $ node app.js

if (!module.parent) {
  app.listen(8001);
  console.log("Express server listening on port %d", app.address().port);
}
