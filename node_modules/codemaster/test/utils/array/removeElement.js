// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Array: remove element', () => { // eslint-disable-line


  it('remove existing element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'b';
    const input = Utils.cloneJSON(array);
    const result = Utils.Array.removeElement(input, element);
    assert.isArray(result);
    assert.equal(result.length, array.length - 1);
    assert.equal(result.indexOf(element), -1);
    assert.equal(array[0], result[0]);
    assert.equal(array[2], result[1]);
    done();
  });

  it('remove duplicated element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c', 'b'];
    const element = 'b';
    const input = Utils.cloneJSON(array);
    const result = Utils.Array.removeElement(input, element);
    assert.isArray(result);
    assert.equal(result.length, array.length - 1);
    assert.equal(array[0], result[0]);
    assert.equal(array[2], result[1]);
    assert.equal(array[3], result[2]);
    done();
  });

  it('remove unexisiting element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'd';
    const input = Utils.cloneJSON(array);
    const result = Utils.Array.removeElement(input, element);
    assert.deepEqual(array, result);
    done();
  });

  it('array is undefined',  (done) => { // eslint-disable-line
    try {
      const element = 'd';
      Utils.Array.removeElement(null, element);
      done('SHOULD NOT GET HERE');
    } catch (err) {
      done();
    }
  });

  it('element is null',  (done) => { // eslint-disable-line
    const array = ['a', null, 'c'];
    const element = null;
    const input = Utils.cloneJSON(array);
    const result = Utils.Array.removeElement(input, element);
    assert.isArray(result);
    assert.equal(result.length, array.length - 1);
    assert.equal(result.indexOf(element), -1);
    assert.equal(array[0], result[0]);
    assert.equal(array[2], result[1]);
    done();
  });
});
