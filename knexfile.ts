import { knexConfig } from './knexconfig';
const knexStringcase = require('knex-stringcase');

module.exports = knexStringcase(knexConfig);
