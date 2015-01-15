'use strict';
var movie = require('node-movie');
var rand = require('unique-random')(0,2900000);
var leadingZeros = require('leading-zeros');

module.exports = function (cb){
	var randNum = rand();
	var randStr = randNum + '';
	var randID = 'tt' + leadingZeros(randNum, 7-randStr.length);
    movie({id: randID}, function(data) {
      cb(data);
    });
};
