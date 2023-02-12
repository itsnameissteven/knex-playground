import { knexConfig } from './knexconfig';
('use strict');

import Person from './src/models/person.model';

const path = require('path');
const AutoLoad = require('@fastify/autoload');

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify: any, opts: any) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'src/plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'src/routes'),
    options: Object.assign({}, opts),
  });

  // Connects your models to knex db
  fastify.register(require('fastify-objectionjs'), {
    knexConfig,
    models: [Person],
  });
};
