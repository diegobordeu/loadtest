// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: cloneJSON', () => { // eslint-disable-line


  it('its is null',  (done) => { // eslint-disable-line
    const copy = Utils.cloneObject(null);
    assert.isNull(copy);
    done();
  });

  it('its is not an object',  (done) => { // eslint-disable-line
    const copy = Utils.cloneObject('string');
    assert.equal(copy, 'string');
    done();
  });

  it('happy path',  (done) => { // eslint-disable-line
    const input = {
      a: 'a',
      b: 'b',
    };
    const copy = Utils.cloneObject(input);
    assert.deepEqual(copy, input);
    done();
  });

});
