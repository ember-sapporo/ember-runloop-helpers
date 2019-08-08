ember-runloop-helpers
==============================================================================

An add-on that provides runloop related helpers.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


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
{{runloop/debounce <method> <wait>    [...args] [immediate=<boolean>]}}
{{runloop/throttle <method> <spacing> [...args] [immediate=<boolean>]}}
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
