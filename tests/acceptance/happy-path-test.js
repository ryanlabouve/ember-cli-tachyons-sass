import {module, test} from 'qunit';
import {visit, currentURL, pauseTest} from '@ember/test-helpers';
import {setupApplicationTest} from 'ember-qunit';

module('Acceptance | happy path', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /happy-path', async function(assert) {
    await visit('/');
    await pauseTest();

    assert.equal(currentURL(), '/');
  });
});
