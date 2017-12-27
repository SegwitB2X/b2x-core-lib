'use strict';

var should = require('chai').should();
var bitcore = require('../');

describe('#versionGuard', function() {
  it('global._b2x_core should be defined', function() {
    should.equal(global._b2x_core, bitcore.version);
  });

  it('show an error if version is already defined', function() {
    //TODO::
  });
});
