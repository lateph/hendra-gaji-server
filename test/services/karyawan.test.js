const assert = require('assert');
const app = require('../../src/app');

describe('\'karyawan\' service', () => {
  it('registered the service', () => {
    const service = app.service('karyawan');

    assert.ok(service, 'Registered the service');
  });
});
