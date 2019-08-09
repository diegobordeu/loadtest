// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const { assert } = chai;

const expected = {
  resolve: [null, null],
  reject: [null, null],
};

const expectedEmpty = {
  resolve: [],
  reject: [],
};

// Our parent block
describe('Promise: buildDoAllResult', () => { // eslint-disable-line


  it('Happy Path',  (done) => { // eslint-disable-line
    assert.deepEqual(Utils.Promise.buildDoAllResult(2), expected);
    done();
  });

  it('n is undef',  (done) => { // eslint-disable-line
    assert.deepEqual(Utils.Promise.buildDoAllResult(), expectedEmpty);
    done();
  });
});
