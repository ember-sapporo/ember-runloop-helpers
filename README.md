ember-runloop-helpers
==============================================================================

An add-on that provides runloop related helpers.

Installation
------------------------------------------------------------------------------

```
ember install ember-runloop-helpers
```


Usage
------------------------------------------------------------------------------

There are two helpers with the same usage: `runloop/debounce`, `runloop/throttle`

``` hbs
<input oninput={{action (runloop/debounce (action (mut foo)) 1000) value='target.value'}}>
<div>{{foo}}</div>
```

This will debounce `(action (mut foo))` with a wait of 1000 miliseconds. If an element is destroyed while waiting for execution, it will automatically cancel the timer.

### Reference

```
{{runloop/debounce <method> <wait>    [...args] [immediate=false]}}
{{runloop/throttle <method> <spacing> [...args] [immediate=false]}}
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone https://github.com/ember-sapporo/ember-runloop-helpers.git`
* `cd ember-runloop-helpers`
* `yarn install`

### Linting

* `yarn lint:js`
* `yarn lint:js --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `yarn test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
