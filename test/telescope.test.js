'use strict';

const mock = require('egg-mock');

describe('test/telescope.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/telescope-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, telescope')
      .expect(200);
  });
});
