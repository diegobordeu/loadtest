// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const { assert } = chai;

const example = {
  resolve: [null, null],
  reject: [null, null],
};

const expectedSuccess = {
  resolve: [null, 'resolve'],
  reject: [null, null],
};

const failError = new Error('reject');


const expectedFailed = {
  resolve: [null, null],
  reject: [null, failError],
};
const success = new Promise((resolve) => { return resolve('resolve'); });
const failed = new Promise((resolve, reject) => { return reject(failError); });

// Our parent block
describe('Promise: registerInResult', () => { // eslint-disable-line


  it('Happy Path, with resolve promise',  async () => { // eslint-disable-line
    const result = Utils.cloneJSON(example);
    Utils.Promise.registerInResult(success, 1, result);
    await Utils.wait(30);
    assert.deepEqual(result, expectedSuccess);
  });

  it('Happy Path, with failed promise',  async () => { // eslint-disable-line
    const result = Utils.cloneJSON(example);
    Utils.Promise.registerInResult(failed, 1, result);
    await Utils.wait(30);
    assert.deepEqual(result, expectedFailed);
  });

  it('element is not a promise',  (done) => { // eslint-disable-line
    const result = Utils.cloneJSON(example);
    Utils.Promise.registerInResult('string', 1, result).then(() => {
      done('SHOULD NOT GET HERE');
    }).catch(() => {
      done();
    });
  });

  it('result is null',  (done) => { // eslint-disable-line
    Utils.Promise.registerInResult(success, 1).then(() => {
      done('SHOULD NOT GET HERE');
    }).catch(() => {
      done();
    });
  });

  it('result.resolve is null',  (done) => { // eslint-disable-line
    Utils.Promise.registerInResult(success, 1, { reject: [] }).then(() => {
      done('SHOULD NOT GET HERE');
    }).catch(() => {
      done();
    });
  });

  it('result.reject is null',  (done) => { // eslint-disable-line
    Utils.Promise.registerInResult(success, 1, { resolve: [] }).then(() => {
      done('SHOULD NOT GET HERE');
    }).catch(() => {
      done();
    });
  });

  it('result.reject is null',  (done) => { // eslint-disable-line
    Utils.Promise.registerInResult(success, null, example).then(() => {
      done('SHOULD NOT GET HERE');
    }).catch(() => {
      done();
    });
  });
});
