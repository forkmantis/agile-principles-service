'use strict';

import index from './index';
import principle from './principle';

module.exports = function routes(app) {
	app.get('/', index);
  app.get('/p/:id', principle);
};
