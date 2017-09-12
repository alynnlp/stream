var https = require('https');
//console.log('I did it!');


var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function() {
  console.log('In response handler callback!');
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

//return node https_example.js
// I'm about to make the request!
// I've made the request!
// In response handler callback!
