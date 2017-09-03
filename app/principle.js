'use strict';

import data from './principles-data';

module.exports = function principle(req, res) {
  const index = --req.params.id;
	res.send({ response: data[index] });
};
