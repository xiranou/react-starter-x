const client = require('./client');
const server = require('./server');
const base = require('./base.dev');
const merge = require('lodash').merge;
const mergeWith = require('lodash').mergeWith;

function merger(objValue, srcValue) {
  if (Array.isArray(srcValue)) {
    return Array.isArray(objValue) ? objValue.concat(srcValue) : srcValue;
  }

  if (typeof srcValue === 'string') {
    return srcValue || objValue;
  }

  return merge({}, objValue, srcValue);
}

const result = mergeWith({}, base, client, merger);

module.exports = [
  mergeWith({}, base, server, merger),
  mergeWith({}, base, client, merger)
];
