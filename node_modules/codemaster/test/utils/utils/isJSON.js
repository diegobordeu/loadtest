// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: isJSON', () => { // eslint-disable-line


  it('its an array',  (done) => { // eslint-disable-line
    const test = ['a', 'string'];
    const bool = Utils.isJSON(test);
    assert.isFalse(bool);
    done();
  });

  it('its an object',  (done) => { // eslint-disable-line
    const test = { a: 'string' };
    const bool = Utils.isJSON(test);
    assert.isTrue(bool);
    done();
  });

  it('its undefined',  (done) => { // eslint-disable-line
    const test = undefined;
    const bool = Utils.isJSON(test);
    assert.isFalse(bool);
    done();
  });

  it('a string',  (done) => { // eslint-disable-line
    const test = 'string';
    const bool = Utils.isJSON(test);
    assert.isFalse(bool);
    done();
  });
});
