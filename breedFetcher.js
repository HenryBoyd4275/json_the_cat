const request = require('request');
const args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], function(error, response, body) {
  if (error) {
    console.log('Error:', error);
  }
  if (body === '[]') {
    console.log('No cat breed found with that search');
  }
  const data = JSON.parse(body);
  console.log(data);
});