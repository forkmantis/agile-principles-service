'use strict';

const data = require('./principles-data');

module.exports = function principle(req, res) {
  const index = --req.params.id;
	res.send({ response: data[index] });
};
