// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const req = utils.mocks.express.req.generate();

const { assert } = chai;
const user = {
  user_id: 1,
};

// Our parent block
describe('Utils: req.render', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('it is not authenticated: by default', (done) => { // eslint-disable-line no-undef
    assert.isFalse(req.isAuthenticated());
    done();
  });

  it('login user is undef', (done) => { // eslint-disable-line no-undef
    req.login();
    assert.isFalse(req.isAuthenticated());
    done();
  });

  it('login user is defined', (done) => { // eslint-disable-line no-undef
    req.login(user);
    assert.deepEqual(req.user, user);
    assert.isTrue(req.isAuthenticated());
    done();
  });

  it('logout user', (done) => { // eslint-disable-line no-undef
    req.logout();
    assert.isUndefined(req.user);
    assert.isFalse(req.isAuthenticated());
    done();
  });
});
