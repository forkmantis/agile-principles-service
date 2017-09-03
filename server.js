'use strict';
var logger, app, server;

import express from 'express';
import l from './utils/logger';
var logger = l('Server', true);
import expressBunyanLogger from 'express-bunyan-logger';
import bodyParser from 'body-parser';
import config from './config';

import routes from './app/routes';

app = module.exports = express();

// Some much needed middleware.
app.use(expressBunyanLogger.errorLogger());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.set('port', config.PORT);

// Start up and initialize the server.
server = app.listen(app.get('port'), function serverListen() {
	logger.info('Server started and listening on port ' + server.address().port);
});
