import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | runloop/throttle', function(hooks) {
  setupRenderingTest(hooks);

  test('it works', async function(assert) {
    await render(hbs`
      <button onclick={{action (runloop/throttle hello 1)}}>Hello</button>

      <div class='output'></div>
    `);

    const output = this.element.querySelector('.output');

    this.set('hello', () => {
      output.textContent += ' hello'
    });

    assert.equal(output.textContent.trim(), '');

    click('button');
    click('button');

    assert.equal(output.textContent.trim(), '');

    await settled();

    assert.equal(output.textContent.trim(), 'hello');

    await click('button');

    assert.equal(output.textContent.trim(), 'hello hello');
  });
});
