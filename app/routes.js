'use strict';
var index;
var principle;

index = require('./index');
principle = require('./principle');

module.exports = function routes(app) {
	app.get('/', index);
  app.get('/p/:id', principle);
};
