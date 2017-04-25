const client = require('./client');
const server = require('./server');
const base = require('./base.dev');
const merge = require('lodash').merge;

module.exports = [
  merge({}, base, server),
  merge({}, base, client)
];
