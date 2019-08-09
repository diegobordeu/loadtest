// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const Utils = require('../../..').utils;

const { assert } = chai;

const failError = new Error('reject');


const expected = {
  resolve: ['resolve', null],
  reject: [null, failError],
};

const empty = {
  resolve: [],
  reject: [],
};

const success = new Promise((resolve) => { return resolve('resolve'); });
const failed = new Promise((resolve, reject) => { return reject(failError); });


// Our parent block
describe('Promise: doAll', () => { // eslint-disable-line


  it('Happy Path', async () => { // eslint-disable-line
    const p = [success, failed];
    const result = await Utils.Promise.doAll(p);
    assert.deepEqual(result, expected);
  });

  it('malicious', async () => { // eslint-disable-line
    const result = await Utils.Promise.doAll();
    assert.deepEqual(result, empty);
  });
});
