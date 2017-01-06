#!/usr/bin/env node
/* jshint node:true */
/* global setImmediate,require,process */
/* eslint-env mocha */
/* eslint-disable no-irregular-whitespace */

function run (next) {
  var assert = require('chai').assert
  var hello = require('../index')

  assert.isDefined(hello)
  next()
}

if (module.parent) {
  module.exports = run
} else {
  run((err) => { if (err) { throw err } })
}
