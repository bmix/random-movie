'use strict';
var rm = require('./index.js');
rm(function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
