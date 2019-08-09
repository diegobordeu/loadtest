// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const req = utils.mocks.express.req.generate();

const { assert } = chai;

// Our parent block
describe('Utils: req.setQUery', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('params is undef, set anyways', (done) => { // eslint-disable-line no-undef
    assert.isUndefined(req.query);
    req.setQuery('key', 'value');
    assert.deepEqual(req.query, { key: 'value' });
    done();
  });

  it('params is defined', (done) => { // eslint-disable-line no-undef
    assert.isDefined(req.query);
    req.setQuery('key2', 'value');
    assert.deepEqual(req.query, { key: 'value', key2: 'value' });
    done();
  });

});
