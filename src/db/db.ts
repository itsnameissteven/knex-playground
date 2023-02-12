const knexFile = require('../../knexfile');
const { Model } = require('objection');
const Knex = require('knex');

const knex = Knex(knexFile);
const data = Model.knex(knex);

module.exports = knex;
