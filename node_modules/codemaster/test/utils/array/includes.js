// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const { assert } = chai;


// Our parent block
describe('Array: has element', () => { // eslint-disable-line


  it('it has element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'b';
    assert.isTrue(Utils.Array.includes(array, element));
    done();
  });
});
