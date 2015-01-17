'use strict';
var movie = require('node-movie');
var ids = require("./id.json");
var rand = require('unique-random')(0,ids.length);

module.exports = function again(cb){
	var randNum = rand();
	var randID = ids[randNum];
	movie({id: randID}, function(data) {
		//No movie with this random ID.
		if(!data || data.Error) {
			again(cb);
			return;
		}
		cb(data);
	});
};
