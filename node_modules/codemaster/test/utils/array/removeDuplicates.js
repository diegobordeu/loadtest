// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const { assert } = chai;


// Our parent block
describe('Array: remove duplicates', () => { // eslint-disable-line


  it('Happy path',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'a', 'c', 'a', 'b', 'b', 'c', 'c', 'd'];
    const expected = ['a', 'b', 'c', 'd'];
    const result = Utils.Array.removeDuplicates(array);
    assert.deepEqual(result, expected);
    done();
  });

  it('array is string',  (done) => { // eslint-disable-line
    const result = Utils.Array.removeDuplicates('array');
    assert.deepEqual(result, ['a', 'r', 'y']);
    done();
  });

  it('array is invalid',  (done) => { // eslint-disable-line
    const result = Utils.Array.removeDuplicates();
    assert.equal(result, null);
    done();
  });
});
