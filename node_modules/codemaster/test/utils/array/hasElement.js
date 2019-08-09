// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const { assert } = chai;


// Our parent block
describe('Array: has element', () => { // eslint-disable-line


  it('it has element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'b';
    assert.isTrue(Utils.Array.hasElement(array, element));
    done();
  });

  it('it does not have element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    assert.isFalse(Utils.Array.hasElement(array, element));
    done();
  });

  it('array it is not an array',  (done) => { // eslint-disable-line
    const element = 'a';
    assert.isFalse(Utils.Array.hasElement('array', element));
    done();
  });
});
