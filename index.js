'use strict';
var movie = require('node-movie');
var rand = require('unique-random')(0,2900000);
var leadingZeros = require('leading-zeros');

module.exports = function again(cb){
	var randNum = rand();
	var randStr = randNum + '';
	var randID = 'tt' + leadingZeros(randNum, 7-randStr.length);
    movie({id: randID}, function(data) {
			//No movie with this random ID.
			if(data.Error) {
				again(cb);
			}
      cb(data);
    });
};
