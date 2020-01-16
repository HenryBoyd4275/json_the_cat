const request = require('request');

const fetchBreedDescription = function(breedname, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedname, function(error, response, body) {

    const data = JSON.parse(body);
    callback(error, data[0].description);
  });
};

module.exports = { fetchBreedDescription };