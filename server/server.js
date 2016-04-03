var express = require('express');
var app = express();
//var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var Twitter = require('twitter');

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(__dirname + '/../client'));

var username;

var client = new Twitter({
  consumer_key: 'MHaQU8YFa5O7DnPN5pQV3K0uT',
  consumer_secret: 'V0hwXHrKzDKDGLvnHNh9Ki8Jpv2AY0JYxarsj1Zy2AbInolyvZ',
  access_token_key: '3409983372-AmyuLWMLvsX1YC7HNXGGo79rWp7kRYSdsIlMTq5',
  access_token_secret: 'VhyGYPzeorKGGeZuJEU8xJodsmfLmHFK16JMhmk2sj8cg'
});
 
// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets);
//   }
// });

// client.get('favorites/list', function(error, tweets, response){
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });

app.get('/', function (req, res) {
  	res.render('index');
});

//post username
app.post('/', function (req, res) {
	console.log('req.data',req.data)
	username = req.body;
	console.log('username', username);
	console.log('inside post');
	// res.send('post');
	client.get('search/tweets', {q: username.username, count: 25}, function(error, tweets, response){
		console.log(tweets);
    	res.send(tweets);
	});
});

app.listen(3000, function () {
  	console.log('listening on port 3000');
});