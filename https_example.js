var https = require('https');
//console.log('I did it!');

// var options = {
//   host: 'example.org',
//   path: '/'
// };

// host a simple web server that
// sends back an entire Monty Python script via an HTTP stream.
var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

// called by https when the request is made.
// HOWEVER,we need to provide a response argument to our callback function
// in order to read the response.

//it will return us 'stream of incoming message' thats not what we want
// var callback = function(response) {
//   console.log('In response handler callback!');
//   console.log('Response: ', response);
// }

//modified callback function
var callback = function(response) {
  console.log('In response handler callback!');

//i dont want the response of "incoming message, but just the chunk"
  response.on('data', function(chunk) {
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
    console.log(chunk.toString());
  });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();
console.log("I've made the request!");

//return node https_example.js
// I'm about to make the request!
// I've made the request!
// In response handler callback!

// options run before callback can run thats why it printed last
