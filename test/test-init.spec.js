/* jshint node:true */
/* eslint-env mocha */
/* eslint-disable no-irregular-whitespace */

describe('oic', function () {
  var tests = [
        {file: './test-init', desc: 'should initialize'}
  ]
  tests.forEach(function (test) {
    it(test.desc + '(' + test.file + ')', function (done) {
      require(test.file)(done)
    })
  })
})
