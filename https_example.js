var https = require('https');
//console.log('I did it!');

var options = {
  host: 'www.twitter.com',
  path: '/'
};

// called by https when the request is made.
// HOWEVER,we need to provide a response argument to our callback function
// in order to read the response. Let's do that ne
var callback = function(response) {
  console.log('In response handler callback!');
  console.log('Response: ', response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();
console.log("I've made the request!");

//return node https_example.js
// I'm about to make the request!
// I've made the request!
// In response handler callback!

// options run before callback can run thats why it printed last
