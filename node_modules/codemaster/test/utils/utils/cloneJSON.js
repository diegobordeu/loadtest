// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: cloneJSON', () => { // eslint-disable-line


  it('its not of type json',  (done) => { // eslint-disable-line
    const test = false;
    const copy = Utils.cloneJSON(test);
    assert.equal(copy, test);
    done();
  });

  it('its undefined',  (done) => { // eslint-disable-line
    const copy = Utils.cloneJSON();
    assert.equal(copy, undefined);
    done();
  });

  it('its copied',  (done) => { // eslint-disable-line
    const test = { a: 'b' };
    const copy = Utils.cloneJSON(test);
    assert.deepEqual(copy, test);
    test.a = 'c';
    assert.equal(copy.a, 'b');
    done();
  });
});
