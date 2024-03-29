(function (exports) {
'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var AWPlugin = (function () {
    /**
     * Base plugin class. Constructor takes in a success function and error function to be executed upon
     * return from call to native layer
     * @param successHandler - the function to be executed when the native call succeeds. passes an object as arg
     * @param errorHandler - the function to be executed when the native call fails. passes an object as arg.
     */
    function AWPlugin(successHandler, errorHandler) {
        this.successHandler = successHandler;
        this.errorHandler = errorHandler;
    }
    return AWPlugin;
}());

var MockAccelerometer = (function () {
    function MockAccelerometer() {
    }
    MockAccelerometer.prototype.getCurrentAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.watchAcceleration = function (accelerometerSuccess, accelerometerError, accelerometerOptions) {
        return null;
    };
    MockAccelerometer.prototype.clearWatch = function (watchID) {
    };
    return MockAccelerometer;
}());

var MockCamera = (function () {
    function MockCamera() {
    }
    MockCamera.prototype.cleanup = function (onSuccess, onError) {
    };
    MockCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
    };
    return MockCamera;
}());

var MockCapture = (function () {
    function MockCapture() {
    }
    MockCapture.prototype.captureAudio = function (onSuccess, onError, options) {
    };
    MockCapture.prototype.captureImage = function (onSuccess, onError, options) {
    };
    MockCapture.prototype.captureVideo = function (onSuccess, onError, options) {
    };
    return MockCapture;
}());

var MockCompass = (function () {
    function MockCompass() {
    }
    MockCompass.prototype.getCurrentHeading = function (onSuccess, onError, options) {
    };
    MockCompass.prototype.watchHeading = function (onSuccess, onError, options) {
        return null;
    };
    MockCompass.prototype.clearWatch = function (id) {
    };
    return MockCompass;
}());

var MockConnection = (function () {
    function MockConnection() {
    }
    MockConnection.prototype.addEventListener = function (type, listener, useCapture) {
    };
    MockConnection.prototype.removeEventListener = function (type, listener, useCapture) {
    };
    return MockConnection;
}());

var MockContacts = (function () {
    function MockContacts() {
        this.fieldType = {};
    }
    MockContacts.prototype.create = function (properties) {
        return null;
    };
    MockContacts.prototype.find = function (fields, onSuccess, onError, options) {
    };
    MockContacts.prototype.pickContact = function (onSuccess, onError) {
    };
    return MockContacts;
}());

var MockFileTransfer = (function () {
    function MockFileTransfer() {
    }
    MockFileTransfer.prototype.upload = function (fileURL, server, successCallback, errorCallback, options, trustAllHosts) {
    };
    MockFileTransfer.prototype.download = function (source, target, successCallback, errorCallback, trustAllHosts, options) {
    };
    MockFileTransfer.prototype.abort = function () {
    };
    return MockFileTransfer;
}());

var MockGeolocation = (function () {
    function MockGeolocation() {
    }
    MockGeolocation.prototype.clearWatch = function (watchId) {
    };
    MockGeolocation.prototype.getCurrentPosition = function (successCallback, errorCallback, options) {
    };
    MockGeolocation.prototype.watchPosition = function (successCallback, errorCallback, options) {
        return null;
    };
    return MockGeolocation;
}());

var MockMedia = (function () {
    function MockMedia(src, successHandler, errorHandler, statusChangeHandler) {
    }
    MockMedia.prototype.getCurrentPosition = function (mediaSuccess, mediaError) {
    };
    MockMedia.prototype.getDuration = function () {
        return null;
    };
    MockMedia.prototype.play = function (iosPlayOptions) {
    };
    MockMedia.prototype.pause = function () {
    };
    MockMedia.prototype.release = function () {
    };
    MockMedia.prototype.seekTo = function (position) {
    };
    MockMedia.prototype.setVolume = function (volume) {
    };
    MockMedia.prototype.startRecord = function () {
    };
    MockMedia.prototype.stopRecord = function () {
    };
    MockMedia.prototype.stop = function () {
    };
    return MockMedia;
}());

var MockNotification = (function () {
    function MockNotification() {
        this.body = null;
        this.dir = null;
        this.icon = null;
        this.lang = null;
        this.onclick = null;
        this.onclose = null;
        this.onerror = null;
        this.onshow = null;
        this.permission = null;
        this.title = null;
        this.tag = null;
        this.close = null;
        this.addEventListener = function (name) {
        };
        this.removeEventListener = function (name) {
        };
        this.dispatchEvent = function (name) {
        };
    }
    MockNotification.prototype.alert = function (message, alertCallback, title, buttonName) {
    };
    MockNotification.prototype.beep = function (times) {
    };
    MockNotification.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
    };
    MockNotification.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
    };
    MockNotification.prototype.vibrate = function () {
    };
    MockNotification.prototype.vibrateWithPattern = function () {
    };
    MockNotification.prototype.cancelVibration = function () {
    };
    return MockNotification;
}());

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var es6Promise = createCommonjsModule(function (module, exports) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.0.5
 */

(function (global, factory) {
    module.exports = factory();
}(commonjsGlobal, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = commonjsRequire;
    var vertx = r('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof commonjsGlobal !== 'undefined') {
        local = commonjsGlobal;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));

});

var es6Promise_1 = es6Promise.Promise;

var PersistentStorageMock = (function () {
    function PersistentStorageMock() {
    }
    PersistentStorageMock.prototype.setExcludedKeys = function (_excludedKeys) {
    };
    PersistentStorageMock.prototype.persistLocalStorage = function () {
        return es6Promise_1.resolve();
    };
    PersistentStorageMock.prototype.loadPersistentData = function () {
        return es6Promise_1.resolve();
    };
    PersistentStorageMock.prototype.migrateCache = function () {
        return es6Promise_1.resolve();
    };
    return PersistentStorageMock;
}());

var MockVibrate = (function () {
    function MockVibrate() {
    }
    MockVibrate.prototype.vibrate = function (time) {
    };
    return MockVibrate;
}());

var LocalFileSystem;
(function (LocalFileSystem) {
    LocalFileSystem[LocalFileSystem["PERSISTENT"] = 0] = "PERSISTENT";
    LocalFileSystem[LocalFileSystem["TEMPORARY"] = 1] = "TEMPORARY";
})(LocalFileSystem || (LocalFileSystem = {}));

var DesktopStorage = (function () {
    function DesktopStorage(desktopPlugin) {
        this.desktopStorage = desktopPlugin;
    }
    DesktopStorage.prototype.persistLocalStorage = function (excludedKeys) {
        var _this = this;
        if (this.desktopStorage === null) {
            return es6Promise_1.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new es6Promise_1(function (resolve, reject) {
            var i, data = [], key, value;
            var storage = AWProxy.storage();
            for (i = 0; i < storage.length; i += 1) {
                key = storage.key(i);
                value = storage.getItem(key);
                if (excludedKeys.indexOf(key) === -1) {
                    data.push({ key: key, value: value });
                }
            }
            var setter = function (obj) { return _this.desktopStorage.setItem(obj.key, obj.value); };
            es6Promise_1.all(data.map(setter)).then(resolve, reject);
        });
    };
    DesktopStorage.prototype.loadPersistentData = function () {
        var _this = this;
        if (this.desktopStorage === null) {
            return es6Promise_1.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return new es6Promise_1(function (resolve, reject) {
            try {
                // get data is actually synchronous
                var data = _this.desktopStorage.getData();
                var storage = AWProxy.storage();
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        storage.setItem(key, data[key]);
                    }
                }
                resolve();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    DesktopStorage.prototype.migrateCache = function (excludedKeys) {
        if (this.desktopStorage === null) {
            return es6Promise_1.reject(DesktopStorage.PLUGIN_NOT_FOUND);
        }
        return es6Promise_1.resolve(null);
    };
    return DesktopStorage;
}());
DesktopStorage.PLUGIN_NOT_FOUND = new Error('Unable to resolve AWStorage desktop plugin');

/**
 * The mobile environment implementation of persistent storage.
 */
var OnDeviceStorage = (function () {
    function OnDeviceStorage() {
    }
    OnDeviceStorage.prototype.persistLocalStorage = function (excludedKeys) {
        var _this = this;
        var i, data = {}, key, value;
        var storage = AWProxy.storage()['storage'];
        for (i = 0; i < Object.keys(storage).length; i += 1) {
            key = Object.keys(storage)[i];
            value = storage[key];
            if (excludedKeys.indexOf(key) === -1) {
                data[key] = value;
            }
        }
        return new es6Promise_1(function (resolve, reject) {
            _this.writeDataToPersistentStorage(JSON.stringify(data)).then(resolve, reject);
        });
    };
    OnDeviceStorage.prototype.loadPersistentData = function () {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            _this.readDataFromPersistentStorage().then(function (json) {
                var data;
                if (json) {
                    data = JSON.parse(json);
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            AWProxy.storage().setItem(item, data[item]);
                        }
                    }
                    resolve();
                }
            }, reject);
        });
    };
    OnDeviceStorage.prototype.migrateCache = function (excludedKeys) {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            _this.readDataAWCacheFile().then(function (json) {
                var data;
                if (json && json !== '') {
                    data = JSON.parse(json);
                    for (var item in data) {
                        if (data.hasOwnProperty(item)) {
                            AWProxy.storage().setItem(item, data[item]);
                        }
                    }
                    AWProxy.persistentStorage().persistLocalStorage(excludedKeys)
                        .then(function () { return _this.deleteAWCacheFile().then(resolve, reject); }, reject);
                }
                resolve();
            }, function (error) {
                resolve();
            });
        });
    };
    OnDeviceStorage.prototype.readDataAWCacheFile = function () {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile('appworksjs.cache.json', {
                    create: false,
                    exclusive: false
                }, gotFileEntry, reject);
            }
            function gotFileEntry(entry) {
                entry.file(gotFile, reject);
            }
            function gotFile(file) {
                readAsText(file);
            }
            function readAsText(file) {
                var reader = new FileReader();
                reader.onloadend = function (evt) {
                    console.log(evt);
                    resolve(evt.target.result);
                };
                reader.readAsText(file);
            }
        });
    };
    OnDeviceStorage.prototype.deleteAWCacheFile = function () {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.requestFileSystem(AWProxy.localFileSystem().PERSISTENT, 0, gotFS, reject);
            function gotFS(fileSystem) {
                fileSystem.root.getFile('appworksjs.cache.json', { create: false, exclusive: false }, gotFileEntry, reject);
            }
            function gotFileEntry(fileEntry) {
                fileEntry.remove(resolve, reject);
            }
        });
    };
    OnDeviceStorage.prototype.readDataFromPersistentStorage = function () {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(resolve, reject, 'AWCache', 'getAllCacheData', []);
        });
    };
    OnDeviceStorage.prototype.writeDataToPersistentStorage = function (data) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(resolve, reject, 'AWCache', 'setAllCacheData', [data]);
        });
    };
    return OnDeviceStorage;
}());

var MockLocalStorage = (function () {
    // allow tests to set a value if they need to
    function MockLocalStorage(len) {
        this.length = isNaN(len) ? 0 : len;
    }
    MockLocalStorage.prototype.getItem = function (key) {
        return null;
    };
    MockLocalStorage.prototype.setItem = function (key, value) {
    };
    MockLocalStorage.prototype.removeItem = function (key) {
    };
    MockLocalStorage.prototype.clear = function () {
    };
    MockLocalStorage.prototype.key = function (index) {
        return null;
    };
    return MockLocalStorage;
}());

/**
 * Web local storage wrapper that hooks into the native persistent layer on mobile and desktop
 * The local and persistent storage are kept in, sync with update being flushed, and the local web
 * storage always acting as the reference.
 */
var AWStorage = (function () {
    function AWStorage(isMobileEnv) {
        this.isMobileEnv = isMobileEnv;
        // resolve the local storage or fall back onto a mock impl
        if (this.isMobileEnv) {
            if (typeof window !== 'undefined') {
                if (typeof window['awcache'] === 'undefined') {
                    window['awcache'] = {};
                }
                this.storage = window['awcache'];
            }
            else {
                this.storage = new MockLocalStorage();
            }
        }
        else {
            this.storage = (typeof window !== 'undefined') ?
                window.localStorage : new MockLocalStorage();
        }
    }
    Object.defineProperty(AWStorage.prototype, "length", {
        get: function () {
            return this.storage ? this.storage.length : -1;
        },
        enumerable: true,
        configurable: true
    });
    AWStorage.prototype.clear = function () {
        if (this.isMobileEnv) {
            var keys = Object.keys(this.storage);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                this.removeItem(key);
            }
        }
        else {
            this.storage.clear();
        }
    };
    AWStorage.prototype.getItem = function (key) {
        if (this.isMobileEnv) {
            return this.storage[key];
        }
        else {
            return this.storage.getItem(key);
        }
    };
    AWStorage.prototype.key = function (index) {
        return this.storage.key(index);
    };
    AWStorage.prototype.removeItem = function (key) {
        if (this.isMobileEnv) {
            delete this.storage[key];
        }
        else {
            return this.storage.removeItem(key);
        }
    };
    AWStorage.prototype.setItem = function (key, data) {
        if (this.isMobileEnv) {
            return this.storage[key] = data;
        }
        else {
            return this.storage.setItem(key, data);
        }
    };
    return AWStorage;
}());

/**
 * Collection of utility functions
 */
function noop() {
}
function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

var DesktopWebviewSequenceStore = {
    seqNo: 0
};
var DesktopWebview = (function () {
    function DesktopWebview() {
        this.id = DesktopWebviewSequenceStore.seqNo++;
    }
    DesktopWebview.prototype.addEventListener = function (type, callback) {
        AWProxy.exec(noop, noop, 'AWWebView', 'addEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.removeEventListener = function (type, callback) {
        AWProxy.exec(noop, noop, 'AWWebView', 'removeEventListener', [this.id, type, callback]);
    };
    DesktopWebview.prototype.close = function () {
        AWProxy.exec(noop, noop, 'AWWebView', 'close', [this.id]);
    };
    DesktopWebview.prototype.show = function () {
        AWProxy.exec(noop, noop, 'AWWebView', 'show', [this.id]);
    };
    DesktopWebview.prototype.open = function (url, target, options) {
        AWProxy.exec(noop, noop, 'AWWebView', 'open', [this.id, url, target, options]);
        return this;
    };
    DesktopWebview.prototype.executeScript = function (script, callback) {
        AWProxy.exec(callback, noop, 'AWWebView', 'executeScript', [this.id, script]);
    };
    DesktopWebview.prototype.insertCSS = function (css, callback) {
        AWProxy.exec(callback, noop, 'AWWebView', 'insertCSS', [this.id, css]);
    };
    return DesktopWebview;
}());

var callbackQueue = [];
var deviceReady = false;
setupDeviceInitializationForMobile();
var AWProxy = (function () {
    function AWProxy() {
    }
    AWProxy.exec = function (successHandler, errorHandler, name, method, args) {
        try {
            if (AWProxy.isDesktopEnv()) {
                AWProxy.execDesktop(successHandler, errorHandler, name, method, args);
            }
            else {
                AWProxy.execMobile(successHandler, errorHandler, name, method, args);
            }
        }
        catch (err) {
            console.error('No proxy objects defined - tried [cordova, __aw_plugin_proxy]', err);
            if (isFunction(errorHandler)) {
                errorHandler(err);
            }
        }
    };
    AWProxy.accelerometer = function () {
        var _accelerometer = typeof 'navigator' !== undefined ? navigator.accelerometer : new MockAccelerometer();
        return _accelerometer;
    };
    AWProxy.camera = function () {
        var _camera = typeof navigator !== 'undefined' ? navigator.camera : new MockCamera();
        return _camera;
    };
    AWProxy.Camera = function () {
        var _Camera = (typeof Camera !== 'undefined') ? Camera : {
            DestinationType: {
                DATA_URL: null,
                FILE_URI: null,
                NATIVE_URI: null,
            },
            Direction: {
                BACK: null,
                FRONT: null,
            },
            EncodingType: {
                JPEG: null,
                PNG: null,
            },
            MediaType: {
                PICTURE: null,
                VIDEO: null,
                ALLMEDIA: null,
            },
            PictureSourceType: {
                PHOTOLIBRARY: null,
                CAMERA: null,
                SAVEDPHOTOALBUM: null,
            },
            // Used only on iOS
            PopoverArrowDirection: {
                ARROW_UP: null,
                ARROW_DOWN: null,
                ARROW_LEFT: null,
                ARROW_RIGHT: null,
                ARROW_ANY: null
            }
        };
        return _Camera;
    };
    AWProxy.compass = function () {
        var _Compass = typeof navigator !== 'undefined' ? navigator.compass : new MockCompass();
        return _Compass;
    };
    AWProxy.connection = function () {
        var _connection = typeof navigator !== 'undefined' ? navigator.connection : new MockConnection();
        return _connection;
    };
    AWProxy.Connection = function () {
        var _Connection = (typeof Connection !== 'undefined') ? Connection : {
            UNKNOWN: null,
            ETHERNET: null,
            WIFI: null,
            CELL_2G: null,
            CELL_3G: null,
            CELL_4G: null,
            CELL: null,
            NONE: null
        };
        return _Connection;
    };
    AWProxy.contacts = function () {
        var _contacts = typeof navigator !== 'undefined' ? navigator.contacts : new MockContacts();
        return _contacts;
    };
    AWProxy.device = function () {
        var _device = (typeof device !== 'undefined') ? device : {
            cordova: null,
            available: true,
            model: null,
            platform: null,
            uuid: null,
            version: null,
            manufacturer: null,
            isVirtual: null,
            serial: null,
            capture: null
        };
        if (typeof navigator !== 'undefined' && navigator.device && navigator.device.capture) {
            _device.capture = navigator.device.capture;
        }
        else {
            _device.capture = new MockCapture();
        }
        return _device;
    };
    AWProxy.document = function () {
        var _document = (typeof document !== 'undefined') ? document : {
            addEventListener: noop
        };
        return _document;
    };
    AWProxy.file = function () {
        if (typeof cordova !== 'undefined') {
            return cordova.file;
        }
        else {
            return {
                documentsDirectory: ''
            };
        }
    };
    AWProxy.filetransfer = function () {
        return AWProxy.doGetFileTransfer();
    };
    // alias name
    AWProxy.fileTransfer = function () {
        return AWProxy.doGetFileTransfer();
    };
    AWProxy.doGetFileTransfer = function () {
        if (AWProxy.isDesktopEnv()) {
            var plugin = AWProxy.getDesktopPlugin('AWFileTransfer');
            return (plugin !== null) ? plugin : new MockFileTransfer();
        }
        return (typeof FileTransfer !== 'undefined') ? new FileTransfer() : new MockFileTransfer();
    };
    AWProxy.geolocation = function () {
        var _geolocation = (typeof navigator !== 'undefined') ? navigator.geolocation : new MockGeolocation();
        return _geolocation;
    };
    AWProxy.localFileSystem = function () {
        return LocalFileSystem;
    };
    AWProxy.media = function (src, successHandler, errorHandler, statusChangeHandler) {
        if (typeof Media !== 'undefined') {
            return new Media(src, successHandler, errorHandler, statusChangeHandler);
        }
        else {
            return new MockMedia(src, successHandler, errorHandler, statusChangeHandler);
        }
    };
    AWProxy.notification = function () {
        var _notification = (typeof navigator !== 'undefined') ? navigator.notification : new MockNotification();
        return _notification;
    };
    AWProxy.requestFileSystem = function (type, size, successCallback, errorCallback) {
        if (window.requestFileSystem) {
            return window.requestFileSystem(type, size, successCallback, errorCallback);
        }
    };
    AWProxy.vibrate = function (time) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            var _vibrate = navigator.vibrate(time);
            return _vibrate;
        }
        else {
            return new MockVibrate().vibrate(time);
        }
    };
    AWProxy.webview = function () {
        if (typeof cordova !== 'undefined') {
            return cordova.InAppBrowser;
        }
        else {
            return new DesktopWebview();
        }
    };
    AWProxy.storage = function () {
        return new AWStorage(AWProxy.isMobileEnv());
    };
    AWProxy.persistentStorage = function () {
        var desktopPlugin = AWProxy.getDesktopPlugin('AWStorage');
        return desktopPlugin !== null ?
            new DesktopStorage(desktopPlugin) : (AWProxy.isMobileEnv()) ?
            new OnDeviceStorage() : new PersistentStorageMock();
    };
    AWProxy.isDesktopEnv = function () {
        return typeof __aw_plugin_proxy !== 'undefined';
    };
    AWProxy.isMobileEnv = function () {
        return typeof cordova !== 'undefined';
    };
    AWProxy.getDesktopPlugin = function (pluginName) {
        if (!AWProxy.isDesktopEnv())
            return null;
        // the proxy exposed by desktop has a method to allow retrieval of plugin instances
        return __aw_plugin_proxy.getPlugin(pluginName);
    };
    AWProxy.execMobile = function (successHandler, errorHandler, name, method, args) {
        if (deviceReady) {
            cordova.exec(successHandler, errorHandler, name, method, args);
        }
        else {
            callbackQueue.push(function () {
                AWProxy.exec(successHandler, errorHandler, name, method, args);
            });
        }
    };
    AWProxy.execDesktop = function (successHandler, errorHandler, name, method, args) {
        __aw_plugin_proxy.exec(successHandler, errorHandler, name, method, args);
    };
    return AWProxy;
}());
function setupDeviceInitializationForMobile() {
    try {
        document.addEventListener('deviceready', function () {
            deviceReady = true;
            callbackQueue.forEach(function (callback) {
                callback();
            });
        });
    }
    catch (e) {
        // unsupported environment
    }
}

var AWAccelerometer$1 = (function (_super) {
    __extends(AWAccelerometer, _super);
    function AWAccelerometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAccelerometer.prototype.getCurrentAcceleration = function () {
        var _this = this;
        return AWProxy.accelerometer().getCurrentAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWAccelerometer.prototype.watchAcceleration = function (options) {
        var _this = this;
        return AWProxy.accelerometer().watchAcceleration((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWAccelerometer.prototype.clearWatch = function (watchId) {
        return AWProxy.accelerometer().clearWatch(watchId);
    };
    return AWAccelerometer;
}(AWPlugin));

var AWAnonymous$1 = (function (_super) {
    __extends(AWAnonymous, _super);
    function AWAnonymous() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAnonymous.prototype.isAnonymousMode = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAnonymous', 'isAnonymousMode', []);
    };
    AWAnonymous.prototype.getAnonymousUrl = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAnonymous', 'getAnonymousUrl', []);
    };
    return AWAnonymous;
}(AWPlugin));

var AWAppManager$1 = (function (_super) {
    __extends(AWAppManager, _super);
    function AWAppManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAppManager.prototype.closeActiveApp = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'closeActiveApp', []);
    };
    AWAppManager.prototype.getAppName = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'getAppName', []);
    };
    AWAppManager.prototype.getAppVersion = function (success, error) {
        AWProxy.exec(success, error, 'AWAppManager', 'getAppVersion', []);
    };
    AWAppManager.prototype.isFirstRun = function (success, error) {
        AWProxy.exec(success, error, 'AWAppManager', 'isFirstRun', []);
    };
    AWAppManager.prototype.setAppHasRun = function (success, error) {
        AWProxy.exec(success, error, 'AWAppManager', 'setAppHasRun', []);
    };
    /* Deprecated, will be removed in the next version */
    AWAppManager.prototype.resetShouldClearCache = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAppManager', 'resetShouldClearCache', []);
    };
    /* Deprecated, will be removed in the next version */
    AWAppManager.prototype.shouldClearCache = function (success) {
        var _this = this;
        AWProxy.exec(success, (function () { return _this.errorHandler; })(), 'AWAppManager', 'shouldClearCache', []);
    };
    return AWAppManager;
}(AWPlugin));

var AWAuth$1 = (function (_super) {
    __extends(AWAuth, _super);
    function AWAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWAuth.prototype.authenticate = function (force) {
        var _this = this;
        force = !!force;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authenticate', [force.toString()]);
    };
    /**
     *  Marked for depreciation
     *  Use authenticate(boolean?), which will get the auth object if the session is valid, else it will refresh the auth object and return that.
     */
    AWAuth.prototype.getAuthResponse = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWAuth', 'authobject', []);
    };
    AWAuth.prototype.gateway = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'gateway', []);
    };
    AWAuth.prototype.online = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'online', []);
    };
    AWAuth.prototype.otdsssoticket = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWAuth', 'otdsssoticket', []);
    };
    return AWAuth;
}(AWPlugin));

var AWCalendar$1 = (function (_super) {
    __extends(AWCalendar, _super);
    function AWCalendar() {
        return _super.call(this, noop, noop) || this;
    }
    AWCalendar.getCalendarOptions = function () {
        return {
            firstReminderMinutes: 60,
            secondReminderMinutes: null,
            recurrence: null,
            recurrenceInterval: 1,
            recurrenceWeekstart: 'MO',
            recurrenceByDay: null,
            recurrenceByMonthDay: null,
            recurrenceEndDate: null,
            recurrenceCount: null,
            calendarName: null,
            calendarId: null,
            url: null
        };
    };
    AWCalendar.prototype.hasReadPermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasReadPermission', []);
        });
    };
    AWCalendar.prototype.requestReadPermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestReadPermission', []);
        });
    };
    AWCalendar.prototype.hasWritePermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasWritePermission', []);
        });
    };
    AWCalendar.prototype.requestWritePermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestWritePermission', []);
        });
    };
    AWCalendar.prototype.hasReadWritePermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'hasReadWritePermission', []);
        });
    };
    AWCalendar.prototype.requestReadWritePermission = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'requestReadWritePermission', []);
        });
    };
    AWCalendar.prototype.createCalendar = function (options, successHandler, errorHandler) {
        if (options === void 0) { options = {
            calendarName: null,
            calendarColor: null
        }; }
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createCalendar', [options]);
        });
    };
    AWCalendar.prototype.deleteCalendar = function (calendarName, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteCalendar', [{ calendarName: calendarName }]);
        });
    };
    AWCalendar.prototype.openCalendar = function (date, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'openCalendar', [{ date: date.getTime() }]);
        });
    };
    AWCalendar.prototype.createEventWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.createEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.createEventWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'createEventInteractively', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.createEventInteractively = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.createEventInteractivelyWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.findEventWithOptions = function (title, location, notes, startDate, endDate, options, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'findEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    options: options
                }]);
        });
    };
    AWCalendar.prototype.findEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return this.findEventWithOptions(title, location, notes, startDate, endDate, AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.findAllEventsInNamedCalendar = function (calendarName, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'findAllEventsInNamedCalendar', [{ calendarName: calendarName }]);
        });
    };
    AWCalendar.prototype.deleteEvent = function (title, location, notes, startDate, endDate, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteEvent', [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                }]);
        });
    };
    AWCalendar.prototype.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'deleteEventFromNamedCalendar', [{
                    title: title,
                    location: location,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    calendarName: calendarName
                }]);
        });
    };
    AWCalendar.prototype.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, newOptions, successHandler, errorHandler) {
        if (options === void 0) { options = AWCalendar.getCalendarOptions(); }
        if (newOptions === void 0) { newOptions = AWCalendar.getCalendarOptions(); }
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'modifyEventWithOptions', [{
                    title: title,
                    location: location,
                    notes: notes,
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime(),
                    newTitle: newTitle,
                    newLocation: newLocation,
                    newNotes: newNotes,
                    newStartTime: newStartDate.getTime(),
                    newEndDate: newEndDate.getTime(),
                    options: options,
                    newOptions: newOptions
                }]);
        });
    };
    AWCalendar.prototype.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, successHandler, errorHandler) {
        return this.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, AWCalendar.getCalendarOptions(), AWCalendar.getCalendarOptions(), successHandler, errorHandler);
    };
    AWCalendar.prototype.modifyEventInNamedCalendar = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, calendarName, successHandler, errorHandler) {
        var options = AWCalendar.getCalendarOptions();
        options.calendarName = calendarName;
        return this.modifyEventWithOptions(title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, options, successHandler, errorHandler);
    };
    AWCalendar.prototype.listCalendars = function (successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'listCalendars', []);
        });
    };
    AWCalendar.prototype.listEventsInRange = function (startDate, endDate, successHandler, errorHandler) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(successHandler || resolve, errorHandler || reject, 'AWCalendar', 'listEventsInRange', [{
                    startTime: startDate.getTime(),
                    endTime: endDate.getTime()
                }]);
        });
    };
    return AWCalendar;
}(AWPlugin));

var AWCamera$1 = (function (_super) {
    __extends(AWCamera, _super);
    function AWCamera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWCamera.prototype.cleanup = function (onSuccess, onError) {
        return AWProxy.camera().cleanup(onSuccess, onError);
    };
    AWCamera.prototype.getPicture = function (cameraSuccess, cameraError, cameraOptions) {
        return AWProxy.camera().getPicture(cameraSuccess, cameraError, cameraOptions);
    };
    AWCamera.prototype.openGallery = function (options) {
        var _this = this;
        options = options || {
            destinationType: AWProxy.Camera().DestinationType.FILE_URI
        };
        options.sourceType = AWProxy.Camera().PictureSourceType.PHOTOLIBRARY;
        return this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCamera.prototype.takePicture = function (options) {
        var _this = this;
        options = options || {
            destinationType: AWProxy.Camera().DestinationType.FILE_URI,
            encodingType: AWProxy.Camera().EncodingType.JPEG,
            mediaType: AWProxy.Camera().MediaType.ALLMEDIA,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        options.sourceType = AWProxy.Camera().PictureSourceType.CAMERA;
        return this.getPicture((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWCamera;
}(AWPlugin));

var AWComponent$1 = (function (_super) {
    __extends(AWComponent, _super);
    function AWComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWComponent.prototype.open = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'open', args || []);
    };
    AWComponent.prototype.list = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'list', args || []);
    };
    AWComponent.prototype.check = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'check', args || []);
    };
    AWComponent.prototype.close = function (successHandler, errorHandler, args) {
        AWProxy.exec(successHandler, errorHandler, 'AWComponent', 'close', args || []);
    };
    AWComponent.prototype.registerAppClose = function (successHandler) {
        var _this = this;
        AWProxy.exec(successHandler, (function () { return _this.errorHandler; })(), 'AWComponent', 'registerAppClose', []);
    };
    AWComponent.prototype.closeApp = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWComponent', 'closeApp', []);
    };
    return AWComponent;
}(AWPlugin));

var AWContacts$1 = (function (_super) {
    __extends(AWContacts, _super);
    function AWContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWContacts.prototype.create = function (contact) {
        return AWProxy.contacts().create(contact);
    };
    AWContacts.prototype.find = function (fields, options) {
        var _this = this;
        return AWProxy.contacts().find(fields, (function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWContacts.prototype.pickContact = function () {
        var _this = this;
        return AWProxy.contacts().pickContact((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    return AWContacts;
}(AWPlugin));

var AWCompass$1 = (function (_super) {
    __extends(AWCompass, _super);
    function AWCompass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWCompass.prototype.getCurrentHeading = function () {
        var _this = this;
        return AWProxy.compass().getCurrentHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })());
    };
    AWCompass.prototype.watchHeading = function (options) {
        var _this = this;
        return AWProxy.compass().watchHeading((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWCompass.prototype.clearWatch = function (watchId) {
        return AWProxy.compass().clearWatch(watchId);
    };
    return AWCompass;
}(AWPlugin));

var AWDevice$1 = (function (_super) {
    __extends(AWDevice, _super);
    function AWDevice() {
        var _this = _super.call(this, function () {
        }, function () {
        }) || this;
        _this.cordova = AWProxy.device().cordova;
        _this.model = AWProxy.device().model;
        _this.platform = AWProxy.device().platform;
        _this.uuid = AWProxy.device().uuid;
        _this.version = AWProxy.device().version;
        _this.manufacturer = AWProxy.device().manufacturer;
        _this.capture = AWProxy.device().capture;
        return _this;
    }
    return AWDevice;
}(AWPlugin));

var Scanner$1 = (function (_super) {
    __extends(Scanner, _super);
    function Scanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scanner.prototype.scanDocument = function (returnType, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWScanner', 'scanDocument', [returnType]);
    };
    return Scanner;
}(AWPlugin));
var AWScanner$1 = (function (_super) {
    __extends(AWScanner, _super);
    function AWScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWScanner;
}(Scanner$1));

var AWFileTransfer$1 = (function (_super) {
    __extends(AWFileTransfer, _super);
    function AWFileTransfer(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.fileTransfer = AWProxy.filetransfer();
        _this.onprogress = null;
        return _this;
    }
    AWFileTransfer.prototype.abort = function () {
        this.fileTransfer.abort();
    };
    AWFileTransfer.prototype.download = function (url, target, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        if (shared && !AWProxy.isDesktopEnv()) {
            AWProxy.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.download(encodeURI(url), this.toEnvFilePath(target), successHandler, errorHandler, false, options);
        }
        return this.fileTransfer;
        function gotSharedContainerUrl(containerUrl) {
            AWProxy.filetransfer().download(encodeURI(url), containerUrl + '/' + target, successHandler, errorHandler, false, options);
        }
    };
    AWFileTransfer.prototype.progressHandler = function (handler) {
        this.fileTransfer.onprogress = handler;
    };
    AWFileTransfer.prototype.upload = function (source, url, options, shared) {
        var _this = this;
        var successHandler = this.successHandler, errorHandler = this.errorHandler;
        options = options || {};
        if (shared && !AWProxy.isDesktopEnv()) {
            AWProxy.exec(gotSharedContainerUrl, (function () { return _this.errorHandler; })(), 'AWSharedDocumentProvider', 'containerForCurrentApp', []);
        }
        else {
            this.fileTransfer.upload(this.toEnvFilePath(source), encodeURI(url), successHandler, errorHandler, options, false);
        }
        return this.fileTransfer;
        function gotSharedContainerUrl(containerUrl) {
            AWProxy.filetransfer().upload(
            // valid use of slash here as shared container is a mobile only concept
            containerUrl + '/' + source, encodeURI(url), successHandler, errorHandler, options, false);
        }
    };
    AWFileTransfer.prototype.toEnvFilePath = function (fileUrl) {
        // use a path relative to the Cordova defined sandbox in a mobile environment
        return AWProxy.isDesktopEnv() ? fileUrl : AWProxy.file().documentsDirectory + '/' + fileUrl;
    };
    return AWFileTransfer;
}(AWPlugin));

var AWFileChooser$1 = (function (_super) {
    __extends(AWFileChooser, _super);
    function AWFileChooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWFileChooser.prototype.selectAndUpload = function (action) {
        var _this = this;
        var args = [action];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFileChooser', 'open', args);
    };
    return AWFileChooser;
}(AWPlugin));

var AWFileSystem$1 = (function (_super) {
    __extends(AWFileSystem, _super);
    function AWFileSystem() {
        var _this = _super.call(this, noop, noop) || this;
        _this.desktopEnvError = new Error('This method is only available in the AppWorks Desktop environment');
        return _this;
    }
    AWFileSystem.prototype.getPath = function (name, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getPath', [name]);
    };
    AWFileSystem.prototype.exists = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'exists', [path]);
    };
    AWFileSystem.prototype.isDir = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'isDir', [path]);
    };
    AWFileSystem.prototype.isOpen = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'isOpen', [path]);
    };
    AWFileSystem.prototype.setReadOnly = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'setReadOnly', [path]);
    };
    AWFileSystem.prototype.createFile = function (path, successCallback, errorCallback, data, append) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createFile', [path, data, append]);
    };
    AWFileSystem.prototype.readFile = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'readFile', [path]);
    };
    AWFileSystem.prototype.createDirectory = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'createDirectory', [path]);
    };
    AWFileSystem.prototype.copy = function (from, to, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'copy', [from, to]);
    };
    AWFileSystem.prototype.open = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'open', [path]);
    };
    AWFileSystem.prototype.reveal = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'reveal', [path]);
    };
    AWFileSystem.prototype.updateLastModifiedDate = function (path, date, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'updateLastModifiedDate', [path, date]);
    };
    AWFileSystem.prototype.getDetails = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'getDetails', [path]);
    };
    AWFileSystem.prototype.listDirContents = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'listDirContents', [path]);
    };
    AWFileSystem.prototype.showSaveDialog = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showSaveDialog', [opts]);
    };
    AWFileSystem.prototype.showDirSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showDirSelector', [opts]);
    };
    AWFileSystem.prototype.showFileSelector = function (opts, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'showFileSelector', [opts]);
    };
    AWFileSystem.prototype.onFileOpen = function (openFileCallback, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'onFileOpen', [openFileCallback]);
    };
    AWFileSystem.prototype.remove = function (path, successCallback, errorCallback) {
        this.validateEnv();
        AWProxy.exec(successCallback, errorCallback, 'AWFileSystem', 'remove', [path]);
    };
    /**
     * The methods of this class should only be called from within an AppWorks desktop
     * environment.
     */
    AWFileSystem.prototype.validateEnv = function () {
        if (!AWProxy.isDesktopEnv()) {
            throw this.desktopEnvError;
        }
    };
    return AWFileSystem;
}(AWPlugin));

var AWFinder$1 = (function (_super) {
    __extends(AWFinder, _super);
    function AWFinder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWFinder.prototype.open = function (path, filename) {
        var _this = this;
        var args = [path, filename];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'open', args);
    };
    AWFinder.prototype.openIn = function (filename) {
        return this.openDirect(filename);
    };
    AWFinder.prototype.list = function (path) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'list', [path]);
    };
    AWFinder.prototype.share = function (filename) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'share', [filename]);
    };
    AWFinder.prototype.openDirect = function (filename) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWFinder', 'openDirect', [filename]);
    };
    return AWFinder;
}(AWPlugin));

var AWGlobalization$1 = (function (_super) {
    __extends(AWGlobalization, _super);
    function AWGlobalization() {
        return _super.call(this, noop, noop) || this;
    }
    AWGlobalization.prototype.getPreferredLanguage = function (successFn, errorFn) {
        AWProxy.exec(successFn, errorFn, 'AWGlobalization', 'getPreferredLanguage', []);
    };
    return AWGlobalization;
}(AWPlugin));

var AWHeaderBar$1 = (function (_super) {
    __extends(AWHeaderBar, _super);
    function AWHeaderBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @deprecated
         * @type {{LeftOne: number; LeftTwo: number; RightOne: number; RightTwo: number}}
         */
        _this.ButtonName = { LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3 };
        /**
         * @deprecated
         * @type {{Hamburger: number; Back: number; Settings: number; Appmenu: number; None: number; Dots: number; Search: number, AppmenuHighlight: number, Close: number, DismissAll: number, Edit: number}}
         */
        _this.ButtonImage = {
            Hamburger: 0,
            Back: 1,
            Settings: 2,
            Appmenu: 3,
            None: 5,
            Dots: 6,
            Search: 7,
            AppmenuHighlight: 8,
            Close: 9,
            DismissAll: 10,
            Edit: 11
        };
        return _this;
    }
    AWHeaderBar.prototype.setHeader = function (config) {
        var _this = this;
        if (config && config.callback) {
            this.callback = config.callback;
            config.callback = true;
        }
        else {
            this.callback = null;
        }
        AWProxy.exec((function () { return _this.callback; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'setHeader', [config]);
    };
    AWHeaderBar.prototype.getHeader = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'getHeader', []);
    };
    AWHeaderBar.prototype.setHeaderButtons = function (callback, config) {
        var _this = this;
        AWProxy.exec(callback, (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'setHeaderButtons', [config]);
    };
    AWHeaderBar.prototype.maskHeader = function (shouldMaskHeader) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWHeaderBar', 'maskHeader', [shouldMaskHeader]);
    };
    return AWHeaderBar;
}(AWPlugin));
AWHeaderBar$1.ButtonName = { LeftOne: 0, LeftTwo: 1, RightOne: 2, RightTwo: 3 };
AWHeaderBar$1.ButtonImage = {
    Hamburger: 0,
    Back: 1,
    Settings: 2,
    Appmenu: 3,
    None: 5,
    Dots: 6,
    Search: 7,
    AppmenuHighlight: 8,
    Close: 9,
    DismissAll: 10,
    Edit: 11
};
// alias
var AWHeader$1 = (function (_super) {
    __extends(AWHeader, _super);
    function AWHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWHeader;
}(AWHeaderBar$1));

var AWKeyboard$1 = (function (_super) {
    __extends(AWKeyboard, _super);
    function AWKeyboard() {
        return _super.call(this, noop, noop) || this;
    }
    AWKeyboard.prototype.hideKeyboardAccessoryBar = function (hide) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'hideKeyboardAccessoryBar', [hide.toString()]);
    };
    AWKeyboard.prototype.close = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'close', []);
    };
    AWKeyboard.prototype.show = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'show', []);
    };
    AWKeyboard.prototype.disableScroll = function (disable) {
        var _this = this;
        disable = !!disable;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWKeyboard', 'disableScroll', [disable.toString()]);
    };
    return AWKeyboard;
}(AWPlugin));

var AWLauncher$1 = (function (_super) {
    __extends(AWLauncher, _super);
    function AWLauncher(successHandler, errorHandler) {
        return _super.call(this, successHandler || noop, errorHandler || noop) || this;
    }
    AWLauncher.prototype.getLaunchData = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWLauncher', 'getLaunchData', []);
    };
    AWLauncher.prototype.getLaunchURL = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWLauncher', 'getLaunchURL', []);
    };
    AWLauncher.prototype.clearLaunchData = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWLauncher', 'clearLaunchData', []);
    };
    AWLauncher.prototype.clearLaunchURL = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWLauncher', 'clearLaunchURL', []);
    };
    AWLauncher.prototype.registerListener = function (successHandler) {
        var _this = this;
        AWProxy.exec(successHandler, (function () { return _this.errorHandler; })(), 'AWLauncher', 'registerListener', []);
    };
    AWLauncher.prototype.getCustomScheme = function (successHandler) {
        var _this = this;
        AWProxy.exec(successHandler, (function () { return _this.errorHandler; })(), 'AWLauncher', 'getCustomScheme', []);
    };
    return AWLauncher;
}(AWPlugin));

var AWLocation$1 = (function (_super) {
    __extends(AWLocation, _super);
    function AWLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWLocation.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().getCurrentPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.watchPosition = function (options) {
        var _this = this;
        return AWProxy.geolocation().watchPosition((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWLocation.prototype.clearWatch = function (watchId) {
        AWProxy.geolocation().clearWatch(watchId);
    };
    return AWLocation;
}(AWPlugin));

var AWMediaCapture$1 = (function (_super) {
    __extends(AWMediaCapture, _super);
    function AWMediaCapture(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.supportedAudioModes = AWProxy.device().capture.supportedAudioModes;
        _this.supportedImageModes = AWProxy.device().capture.supportedImageModes;
        _this.supportedVideoModes = AWProxy.device().capture.supportedVideoModes;
        return _this;
    }
    AWMediaCapture.prototype.captureAudio = function (options) {
        var _this = this;
        AWProxy.device().capture.captureAudio((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureImage = function (options) {
        var _this = this;
        AWProxy.device().capture.captureImage((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    AWMediaCapture.prototype.captureVideo = function (options) {
        var _this = this;
        AWProxy.device().capture.captureVideo((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), options);
    };
    return AWMediaCapture;
}(AWPlugin));

var AWMedia$1 = (function (_super) {
    __extends(AWMedia, _super);
    function AWMedia(src, successHandler, errorHandler, statusChangeHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.media = AWProxy.media(src, successHandler, errorHandler, statusChangeHandler);
        _this.src = src;
        _this.position = _this.media.position;
        _this.duration = _this.media.duration;
        return _this;
    }
    AWMedia.prototype.getCurrentPosition = function (successHandler, errorHandler) {
        return this.media.getCurrentPosition(successHandler, errorHandler);
    };
    AWMedia.prototype.getDuration = function () {
        return this.media.getDuration();
    };
    AWMedia.prototype.pause = function () {
        return this.media.pause();
    };
    AWMedia.prototype.play = function () {
        return this.media.play();
    };
    AWMedia.prototype.release = function () {
        return this.media.release();
    };
    AWMedia.prototype.seekTo = function (value) {
        return this.media.seekTo(value);
    };
    AWMedia.prototype.setVolume = function (value) {
        return this.media.setVolume(value);
    };
    AWMedia.prototype.startRecord = function () {
        return this.media.startRecord();
    };
    AWMedia.prototype.stop = function () {
        return this.media.stop();
    };
    AWMedia.prototype.stopRecord = function () {
        return this.media.stopRecord();
    };
    return AWMedia;
}(AWPlugin));

var AWMenu$1 = (function (_super) {
    __extends(AWMenu, _super);
    function AWMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWMenu.prototype.push = function (items) {
        var _this = this;
        var args = [items];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWMenu', 'push', args);
    };
    AWMenu.prototype.setMenu = function (menuSections) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.exec(resolve, reject, 'AWMenu', 'setMenu', [menuSections]);
        });
    };
    AWMenu.prototype.didOpenMenuItem = function (callback) {
        var _this = this;
        AWProxy.exec(callback, (function () { return _this.errorHandler; })(), 'AWMenu', 'receive', []);
    };
    AWMenu.prototype.openListener = function (listener) {
        var _this = this;
        AWProxy.exec(listener, (function () { return _this.errorHandler; })(), 'AWMenu', 'receive', []);
    };
    AWMenu.prototype.showMenu = function (shouldShowMenu) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWMenu', 'showMenu', [shouldShowMenu]);
    };
    AWMenu.prototype.didTapMenuItem = function (listener) {
        return this.openListener(listener);
    };
    return AWMenu;
}(AWPlugin));

var AWMobileFileSystem$1 = (function (_super) {
    __extends(AWMobileFileSystem, _super);
    function AWMobileFileSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // File listing
    AWMobileFileSystem.prototype.list = function (directory, shared, success, error) {
        var args = [directory, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'list', args);
    };
    // Imports
    AWMobileFileSystem.prototype.listImports = function (success, error) {
        var args = [];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'listImports', args);
    };
    AWMobileFileSystem.prototype.moveImport = function (source, destination, desintationShared, success, error) {
        var args = [source, destination, desintationShared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'moveImport', args);
    };
    // File IO
    AWMobileFileSystem.prototype.exists = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'exists', args);
    };
    AWMobileFileSystem.prototype.isOpen = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'isOpen', args);
    };
    AWMobileFileSystem.prototype.rename = function (source, destination, shared, success, error) {
        var args = [source, destination, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'rename', args);
    };
    AWMobileFileSystem.prototype.copy = function (source, sourceShared, destination, destinationShared, success, error) {
        var args = [source, sourceShared, destination, destinationShared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'copy', args);
    };
    AWMobileFileSystem.prototype.move = function (source, sourceShared, destination, destinationShared, success, error) {
        var args = [source, sourceShared, destination, destinationShared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'move', args);
    };
    AWMobileFileSystem.prototype.remove = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'remove', args);
    };
    AWMobileFileSystem.prototype.removeDirectory = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'removeDirectory', args);
    };
    AWMobileFileSystem.prototype.readFile = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'read', args);
    };
    // File sharing
    AWMobileFileSystem.prototype.open = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'open', args);
    };
    AWMobileFileSystem.prototype.edit = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'edit', args);
    };
    AWMobileFileSystem.prototype.share = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'share', args);
    };
    AWMobileFileSystem.prototype.quicklook = function (source, shared, success, error) {
        var args = [source, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'quicklook', args);
    };
    // File transfer
    AWMobileFileSystem.prototype.download = function (source, destination, headers, shared, success, error) {
        var args = [source, destination, headers, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'download', args);
    };
    AWMobileFileSystem.prototype.upload = function (source, destination, fileParameterName, formData, headers, shared, success, error) {
        var args = [source, destination, fileParameterName, formData, headers, shared];
        AWProxy.exec(success, error, 'AWMobileFileSystem', 'upload', args);
    };
    return AWMobileFileSystem;
}(AWPlugin));

var AWNotificationManager$1 = (function (_super) {
    __extends(AWNotificationManager, _super);
    function AWNotificationManager() {
        return _super.call(this, noop, noop) || this;
    }
    AWNotificationManager.prototype.createClientNotification = function (identifier, title, subtitle, seconds, success, error) {
        AWProxy.exec(success, error, 'AWNotificationManager', 'createClientNotification', [identifier, title, subtitle, seconds]);
    };
    AWNotificationManager.prototype.didTapNotificationFromActivityView = function (handler, errorHandler, includeSeqNo) {
        this.openListener(handler, errorHandler, includeSeqNo);
    };
    AWNotificationManager.prototype.disablePushNotifications = function () {
        AWProxy.exec(null, null, "AWNotificationManager", "disablePushNotifications", []);
    };
    AWNotificationManager.prototype.enablePushNotifications = function (handler, errorHandler, includeSeqNo) {
        AWProxy.exec(handler, errorHandler, "AWNotificationManager", "enablePushNotifications", AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]);
    };
    AWNotificationManager.prototype.getNotifications = function (handler, errorHandler, includeSeqNo) {
        AWProxy.exec(handler, errorHandler, "AWNotificationManager", "getPushNotifications", [includeSeqNo]);
    };
    AWNotificationManager.prototype.getOpeningNotification = function (handler, errorHandler, includeSeqNo) {
        AWProxy.exec(handler, errorHandler, "AWNotificationManager", "getOpeningNotification", [includeSeqNo]);
    };
    AWNotificationManager.prototype.notificationDidLaunchApp = function (handler, errorHandler, includeSeqNo) {
        this.getOpeningNotification(handler, errorHandler, includeSeqNo);
    };
    AWNotificationManager.prototype.openListener = function (handler, errorHandler, includeSeqNo) {
        AWProxy.exec(handler, errorHandler, "AWNotificationManager", "openListener", AWProxy.isDesktopEnv() ? [handler, includeSeqNo] : [includeSeqNo]);
    };
    AWNotificationManager.prototype.registerForTopic = function (topicName) {
        AWProxy.exec(null, null, "AWNotificationManager", "registerForTopic", [topicName]);
    };
    AWNotificationManager.prototype.removeAllClientNotifications = function (success, error) {
        AWProxy.exec(success, error, 'AWNotificationManager', 'removeAllClientNotifications', []);
    };
    AWNotificationManager.prototype.removeClientNotification = function (identifier, success, error) {
        AWProxy.exec(success, error, 'AWNotificationManager', 'removeClientNotification', [identifier]);
    };
    AWNotificationManager.prototype.removeNotification = function (seqNo, handler, errorHandler) {
        AWProxy.exec(handler, errorHandler, "AWNotificationManager", "removeNotification", [seqNo]);
    };
    AWNotificationManager.prototype.unregisterFromTopic = function (topicName) {
        AWProxy.exec(null, null, "AWNotificationManager", "unregisterFromTopic", [topicName]);
    };
    AWNotificationManager.prototype.alert = function (message, alertCallback, title, buttonName) {
        AWProxy.notification().alert(message, alertCallback, title, buttonName);
    };
    AWNotificationManager.prototype.beep = function (times) {
        AWProxy.notification().beep(times);
    };
    AWNotificationManager.prototype.confirm = function (message, confirmCallback, title, buttonLabels) {
        AWProxy.notification().confirm(message, confirmCallback, title, buttonLabels);
    };
    AWNotificationManager.prototype.prompt = function (message, promptCallback, title, buttonLabels, defaultText) {
        AWProxy.notification().prompt(message, promptCallback, title, buttonLabels, defaultText);
    };
    return AWNotificationManager;
}(AWPlugin));

var AWCache$1 = (function (_super) {
    __extends(AWCache, _super);
    function AWCache(options) {
        var _this = _super.call(this, noop, noop) || this;
        _this.excludedKeys = [];
        _this.options = options || { usePersistentStorage: false };
        console.log("AWCache instantiate, don't forget to call preloadCache().then(function(){}, function(err){})");
        return _this;
    }
    AWCache.prototype.setExcludedKeys = function (_excludedKeys) {
        this.excludedKeys = _excludedKeys;
    };
    AWCache.prototype.setItem = function (key, value) {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.storage().setItem(key, value);
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.getItem = function (key) {
        var item = AWProxy.storage().getItem(key);
        return (typeof item === 'undefined' ? '' : item);
    };
    AWCache.prototype.removeItem = function (key) {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.storage().removeItem(key);
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.clear = function () {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            AWProxy.storage().clear();
            if (_this.usePersistentStorage()) {
                AWProxy.persistentStorage().persistLocalStorage(_this.excludedKeys)
                    .then(resolve, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.preloadCache = function () {
        var _this = this;
        return new es6Promise_1(function (resolve, reject) {
            if (_this.usePersistentStorage()) {
                _this.migrateCache(_this.excludedKeys).then(function () {
                    AWProxy.persistentStorage().loadPersistentData()
                        .then(function () {
                        console.log('AWCache: Successfully loaded persistent data into local storage');
                        resolve();
                    }, function (err) {
                        var error = "AWCache: Failed to load persistent data into local storage - " + err.toString();
                        console.error(error);
                        reject(error);
                    });
                }, reject);
            }
            else {
                resolve();
            }
        });
    };
    AWCache.prototype.migrateCache = function (excludedKeys) {
        return new es6Promise_1(function (resolve, reject) {
            AWProxy
                .persistentStorage()
                .migrateCache(excludedKeys)
                .then(resolve);
        });
    };
    AWCache.prototype.usePersistentStorage = function () {
        return this.options.usePersistentStorage;
    };
    return AWCache;
}(AWPlugin));

var AWOfflineManager$1 = (function (_super) {
    __extends(AWOfflineManager, _super);
    function AWOfflineManager(options) {
        var _this = _super.call(this, noop, noop) || this;
        var document;
        _this.cacheKey = '__appworksjs.deferredQueue';
        _this.cache = new AWCache$1();
        _this.options = options || { preserveEvents: false };
        document = AWProxy.document();
        // process deferred queue when network status changes
        document.addEventListener('online', function () {
            _this.processDeferredQueue();
        });
        var queue = _this.cache.getItem(_this.cacheKey);
        if (queue) {
            _this.queue = JSON.parse(queue);
        }
        else {
            _this.queue = [];
            _this.saveQueue();
        }
        // process the deferred queue upon object instantiation if we are currently online
        if (_this.networkStatus().online) {
            _this.processDeferredQueue();
        }
        return _this;
    }
    AWOfflineManager.prototype.defer = function (eventName, args) {
        this.queue.push({
            event: eventName,
            args: JSON.stringify(args)
        });
        this.saveQueue();
        return (this.queue.length - 1);
    };
    AWOfflineManager.prototype.cancel = function (id) {
        if (id > -1) {
            this.queue.splice(id, 1);
            this.saveQueue();
        }
    };
    AWOfflineManager.prototype.networkStatus = function () {
        return {
            online: AWProxy.connection().type !== AWProxy.Connection().NONE,
            offline: AWProxy.connection().type === AWProxy.Connection().NONE,
            connection: AWProxy.connection()
        };
    };
    AWOfflineManager.prototype.saveQueue = function () {
        this.cache.setItem(this.cacheKey, JSON.stringify(this.queue));
    };
    AWOfflineManager.prototype.processDeferredQueue = function () {
        var self = this;
        setTimeout(function () {
            self.queue.forEach(function (deferred) {
                self.dispatchEvent(deferred);
            });
            if (!self.options.preserveEvents) {
                self.queue = [];
                self.saveQueue();
            }
        }, 5000);
    };
    AWOfflineManager.prototype.dispatchEvent = function (data) {
        var event = new CustomEvent(data.event, { detail: data.args });
        document.dispatchEvent(event);
    };
    return AWOfflineManager;
}(AWPlugin));

var AWPage$1 = (function (_super) {
    __extends(AWPage, _super);
    function AWPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWPage.prototype.setPageUrl = function (url) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'setPageUrl', [url]);
    };
    AWPage.prototype.openModalAppWebView = function (url, title, closeTitle) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'showModalAppWebView', [url, title, closeTitle]);
    };
    AWPage.prototype.openModalExternalWebView = function (url, title, closeTitle, options) {
        var _this = this;
        if (typeof options === 'undefined' || !options) {
            options = {};
        }
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'showModalExternalWebView', [url, title, closeTitle, options]);
    };
    AWPage.prototype.setActionButtonCallback = function (callback, actionTitle) {
        var _this = this;
        AWProxy.exec(callback, (function () { return _this.errorHandler; })(), 'AWPage', 'setModalAppWebViewActionCallback', [actionTitle]);
    };
    AWPage.prototype.closeModalAppWebView = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPage', 'closeModalAppWebView', []);
    };
    AWPage.prototype.video = function (success, error, url) {
        AWProxy.exec(success, error, 'AWPage', 'video', [url]);
    };
    return AWPage;
}(AWPlugin));

var Print$1 = (function (_super) {
    __extends(Print, _super);
    function Print() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Print.prototype.print = function (options) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'print', [options]);
    };
    Print.prototype.getPrinters = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'getPrinters', []);
    };
    Print.prototype.printToPDF = function (options) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWPrint', 'printToPDF', [options]);
    };
    return Print;
}(AWPlugin));
var AWPrint$1 = (function (_super) {
    __extends(AWPrint, _super);
    function AWPrint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWPrint;
}(Print$1));

var QRReader$1 = (function (_super) {
    __extends(QRReader, _super);
    function QRReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRReader.prototype.scan = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'scan', []);
    };
    QRReader.prototype.rename = function () {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'rename', []);
    };
    QRReader.prototype.barcode = function (multiple, timeout, finishTitle, cancelTitle) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWQRCodeReader', 'barcode', [multiple, timeout, finishTitle, cancelTitle]);
    };
    return QRReader;
}(AWPlugin));
var AWQRReader$1 = (function (_super) {
    __extends(AWQRReader, _super);
    function AWQRReader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWQRReader;
}(QRReader$1));

var Realm$1 = (function (_super) {
    __extends(Realm, _super);
    function Realm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FIELD_OBJECT_NAME = 'name';
        _this.FIELD_OBJECT_TYPE = 'type';
        _this.FIELD_OBJECT_PRIMARYKEY = 'key';
        _this.FIELD_OBJECT_INDEX = 'index';
        _this.FIELD_OBJECT_RELATIONSHIP = 'relationship';
        _this.OBJECT_DESCRIPTION_NAME = 'name';
        _this.OBJECT_DESCRIPTION_TYPE = 'type';
        _this.OBJECT_DESCRIPTION_FIELDS = 'fields';
        _this.OBJECT_DESCRIPTION_KEY = 'key';
        _this.OBJECT_DESCRIPTION_INDEX = 'index';
        _this.FIELD_TYPE_STRING = 'STRING';
        _this.FIELD_TYPE_INTEGER = 'INTEGER';
        _this.FIELD_TYPE_BOOLEAN = 'BOOLEAN';
        _this.FIELD_TYPE_LONG = 'LONG';
        _this.FIELD_TYPE_SHORT = 'SHORT';
        _this.FIELD_TYPE_DOUBLE = 'DOUBLE';
        _this.FIELD_TYPE_FLOAT = 'FLOAT';
        _this.FIELD_TYPE_BINARY = 'BINARY';
        _this.FIELD_TYPE_BYTE = 'BYTE';
        _this.FIELD_TYPE_OBJECT = 'OBJECT';
        _this.FIELD_TYPE_LIST = 'LIST';
        _this.FIELD_TYPE_DATE = 'DATE';
        _this.QUERY_OBJECT_NAME = 'object';
        _this.QUERY_TYPE = 'type';
        _this.QUERY_FIELD = 'field';
        _this.QUERY_SORT = 'sort';
        _this.QUERY_SORT_ASC = 'asc';
        _this.QUERY_SORT_DESC = 'desc';
        _this.QUERY_VALUE = 'value';
        _this.QUERY_VALUE_2 = 'value2';
        _this.QUERY_TYPE_BEGIN_GROUP = 'beginGroup';
        _this.QUERY_TYPE_END_GROUP = 'endGroup';
        _this.QUERY_TYPE_AND = 'and';
        _this.QUERY_TYPE_OR = 'or';
        _this.QUERY_TYPE_EQUAL_TO = 'equalTo';
        _this.QUERY_TYPE_NOT_EQUAL_TO = 'notEqualTo';
        _this.QUERY_TYPE_BEGINS_WITH = 'beginsWith';
        _this.QUERY_TYPE_ENDS_WITH = 'endsWith';
        _this.QUERY_TYPE_CONTAINS = 'contains';
        _this.QUERY_TYPE_BETWEEN = 'between';
        _this.QUERY_TYPE_GREATER_THAN = 'greaterThan';
        _this.QUERY_TYPE_GREATER_THAN_OR_EQUAL_TO = 'greaterThanOrEqualTo';
        _this.QUERY_TYPE_LESS_THAN = 'lessThan';
        _this.QUERY_TYPE_LESS_THAN_OR_EQUAL_TO = 'lessThanOrEqualTo';
        _this.QUERY_TYPE_LIKE = 'like';
        _this.QUERY_TYPE_IN = 'in';
        _this.queryBuilder = {
            arr: [],
            subArray: [],
            inSubArray: false,
            addToArray: function (obj, isSubArray) {
                if (isSubArray) {
                    this.subArray.push(obj);
                }
                else {
                    this.arr.push(obj);
                }
            },
            equalTo: function (field, value) {
                var obj = {
                    'type': 'equalTo',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            notEqualTo: function (field, value) {
                var obj = {
                    'type': 'notEqualTo',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            beginsWith: function (field, value) {
                var obj = {
                    'type': 'beginsWith',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            endsWith: function (field, value) {
                var obj = {
                    'type': 'endsWith',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            contains: function (field, value) {
                var obj = {
                    'type': 'contains',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            between: function (field, value, value2) {
                var obj = {
                    'type': 'between',
                    'field': field,
                    'value': value,
                    'value2': value2
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            greaterThan: function (field, value) {
                var obj = {
                    'type': 'greaterThan',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            greaterThanOrEqualTo: function (field, value) {
                var obj = {
                    'type': 'greaterThanOrEqualTo',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            lessThan: function (field, value) {
                var obj = {
                    'type': 'lessThan',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            lessThanOrEqualTo: function (field, value) {
                var obj = {
                    'type': 'lessThanOrEqualTo',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            like: function (field, value) {
                var obj = {
                    'type': 'like',
                    'field': field,
                    'value': value
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            and: function () {
                var obj = {
                    'type': 'and'
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            or: function () {
                var obj = {
                    'type': 'or'
                };
                this.addToArray(obj, this.inSubArray);
                return this;
            },
            beginGroup: function () {
                this.subArray = [];
                this.inSubArray = true;
                return this;
            },
            endGroup: function () {
                this.arr.push(this.subArray);
                this.inSubArray = false;
                return this;
            },
            done: function () {
                var tempArray = this.arr;
                this.clear();
                return tempArray;
            },
            clear: function () {
                this.inSubArray = false;
                this.subArray = [];
                this.arr = [];
            }
        };
        return _this;
    }
    Realm.prototype.startRealm = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'start_realm', []);
    };
    Realm.prototype.getAllObjectNames = function (successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'get_all_object_names', []);
    };
    Realm.prototype.objectExists = function (objectName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'object_exists', [objectName]);
    };
    Realm.prototype.createObject = function (objectName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'create_object', [objectName]);
    };
    Realm.prototype.addField = function (objectName, field, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'add_field', [objectName, field]);
    };
    Realm.prototype.addFields = function (objectName, field, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'add_fields', [objectName, field]);
    };
    Realm.prototype.describeObject = function (objectName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'describe_object', [objectName]);
    };
    Realm.prototype.objectHasField = function (objectName, fieldName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'object_has_field', [objectName, fieldName]);
    };
    Realm.prototype.getFieldType = function (objectName, fieldName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'get_field_type', [objectName, fieldName]);
    };
    Realm.prototype.insert = function (objectName, dataObject, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'insert', [objectName, dataObject]);
    };
    Realm.prototype.update = function (objectName, dataObject, queryArray, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'update', [objectName, dataObject, queryArray]);
    };
    Realm.prototype.select = function (objectName, queryArray, sort, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'select', [objectName, queryArray, sort]);
    };
    Realm.prototype.remove = function (objectName, queryArray, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'remove', [objectName, queryArray]);
    };
    Realm.prototype.removeAll = function (objectName, successHandler, errorHandler) {
        AWProxy.exec(successHandler, errorHandler, 'AWRealm', 'remove_all', [objectName]);
    };
    return Realm;
}(AWPlugin));
var AWRealm$1 = (function (_super) {
    __extends(AWRealm, _super);
    function AWRealm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWRealm;
}(Realm$1));

var SecureStorage$1 = (function (_super) {
    __extends(SecureStorage, _super);
    function SecureStorage(successHandler, errorHandler) {
        var _this = _super.call(this, successHandler, errorHandler) || this;
        _this.seqNo = ++SecureStorage.idCounter;
        _this.onprogress = null;
        return _this;
    }
    SecureStorage.prototype.store = function (url, target, options, encodeUri) {
        var _this = this;
        if (encodeUri === void 0) { encodeUri = true; }
        var args = [encodeUri ? encodeURI(url) : url, target, false, this.seqNo, options && options.headers], completionHandler = function () { return _this.successHandler; }, progressHandler = this.onprogress, progress;
        function newProgressEvent(result) {
            var pe = new ProgressEvent(null);
            pe.lengthComputable = result.lengthComputable;
            pe.loaded = result.loaded;
            pe.total = result.total;
            return pe;
        }
        progress = function (result) {
            if (typeof result.lengthComputable !== 'undefined') {
                if (progressHandler) {
                    progressHandler(newProgressEvent(result));
                }
            }
            else {
                if (completionHandler) {
                    completionHandler()(result);
                }
            }
        };
        AWProxy.exec(progress, (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'store', args);
    };
    SecureStorage.prototype.retrieve = function (filename, options) {
        var _this = this;
        var args = [filename, options];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'retrieve', args);
    };
    SecureStorage.prototype.remove = function (target) {
        var _this = this;
        var args = [target];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'removeFile', args);
    };
    SecureStorage.prototype.fileExistsAtPath = function (target) {
        var _this = this;
        var args = [target];
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWSecureStorage', 'fileExistsAtPath', args);
    };
    return SecureStorage;
}(AWPlugin));
SecureStorage$1.idCounter = 0;
var AWSecureStorage$1 = (function (_super) {
    __extends(AWSecureStorage, _super);
    function AWSecureStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWSecureStorage;
}(SecureStorage$1));

var Shake$1 = (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.enableShake = function (callback) {
        var _this = this;
        AWProxy.exec(callback, (function () { return _this.errorHandler; })(), 'AWShake', 'enableShake', []);
    };
    Shake.prototype.disableShake = function (callback) {
        var _this = this;
        AWProxy.exec((function () { return _this.successHandler; })(), (function () { return _this.errorHandler; })(), 'AWShake', 'disableShake', []);
    };
    return Shake;
}(AWPlugin));
var AWShake$1 = (function (_super) {
    __extends(AWShake, _super);
    function AWShake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AWShake;
}(Shake$1));

var AWVibration$1 = (function (_super) {
    __extends(AWVibration, _super);
    function AWVibration() {
        return _super.call(this, noop, noop) || this;
    }
    AWVibration.prototype.vibrate = function (time) {
        return AWProxy.vibrate(time);
    };
    return AWVibration;
}(AWPlugin));

var AWWebView$1 = (function (_super) {
    __extends(AWWebView, _super);
    function AWWebView() {
        return _super.call(this, noop, noop) || this;
    }
    AWWebView.prototype.open = function (url, target, options) {
        return AWProxy.webview().open(url, target, options);
    };
    AWWebView.prototype.addEventListener = function (type, callback) {
        AWProxy.webview().addEventListener(type, callback);
    };
    AWWebView.prototype.removeEventListener = function (type, callback) {
        AWProxy.webview().removeEventListener(type, callback);
    };
    AWWebView.prototype.show = function () {
        AWProxy.webview().show();
    };
    AWWebView.prototype.close = function () {
        AWProxy.webview().close();
    };
    AWWebView.prototype.executeScript = function (script, callback) {
        AWProxy.webview().executeScript(script, callback);
    };
    AWWebView.prototype.insertCSS = function (script, callback) {
        AWProxy.webview().insertCSS(script, callback);
    };
    return AWWebView;
}(AWPlugin));

// Accelerometer plugin and alias -- [mobile]
var Accelerometer = AWAccelerometer$1;
var AWAccelerometer$$1 = AWAccelerometer$1;
// Anonymous plugin and alias -- [mobile]
var Anonymous = AWAnonymous$1;
var AWAnonymous$$1 = AWAnonymous$1;
// AppManager plugin and alias -- [mobile]
var AppManager = AWAppManager$1;
var AWAppManager$$1 = AWAppManager$1;
// Auth plugin and alias -- [desktop/mobile]
var Auth = AWAuth$1;
var AWAuth$$1 = AWAuth$1;
// Cache plugin and alias -- [desktop/mobile]
var Cache = AWCache$1;
var AWCache$$1 = AWCache$1;
// Calendar plugin and alias -- [desktop/mobile]
var Calendar = AWCalendar$1;
var AWCalendar$$1 = AWCalendar$1;
// Camera plugin and alias -- [mobile]
var Camera$1 = AWCamera$1;
var AWCamera$$1 = AWCamera$1;
// Compass plugin and alias -- [mobile]
var Compass = AWCompass$1;
var AWCompass$$1 = AWCompass$1;
// Component plugin and alias -- [mobile]
var Component = AWComponent$1;
var AWComponent$$1 = AWComponent$1;
// Contacts plugin and alias -- [mobile]
var Contacts = AWContacts$1;
var AWContacts$$1 = AWContacts$1;
// Device plugin and alias -- [desktop/mobile]
var Device = AWDevice$1;
var AWDevice$$1 = AWDevice$1;
// FileChooser plugin and alias -- [mobile]
var FileChooser = AWFileChooser$1;
var AWFileChooser$$1 = AWFileChooser$1;
// FileTransfer plugin and alias -- [desktop/mobile]
var FileTransfer$1 = AWFileTransfer$1;
var AWFileTransfer$$1 = AWFileTransfer$1;
// Finder plugin and alias -- [mobile]
var Finder = AWFinder$1;
var AWFinder$$1 = AWFinder$1;
// Globalization plugin and alias -- [mobile]
var Globalization = AWGlobalization$1;
var AWGlobalization$$1 = AWGlobalization$1;
// Header plugin and alias -- [mobile]
var HeaderBar = AWHeaderBar$1;
var Header = AWHeaderBar$1;
var AWHeader$$1 = AWHeaderBar$1;
var AWHeaderBar$$1 = AWHeaderBar$1;
// Keyboard plugin and alias -- [mobile]
var Keyboard = AWKeyboard$1;
var AWKeyboard$$1 = AWKeyboard$1;
// Location plugin and alias -- [mobile]
var Location = AWLocation$1;
var AWLocation$$1 = AWLocation$1;
// Launcher plugin and alias -- [mobile]
var Launcher = AWLauncher$1;
var AWLauncher$$1 = AWLauncher$1;
// Media plugin and alias -- [mobile]
var Media$1 = AWMedia$1;
var AWMedia$$1 = AWMedia$1;
// MediaCapture plugin and alias -- [mobile]
var MediaCapture = AWMediaCapture$1;
var AWMediaCapture$$1 = AWMediaCapture$1;
// Menu plugin and alias -- [mobile]
var Menu = AWMenu$1;
var AWMenu$$1 = AWMenu$1;
var AWHamburgerMenu = AWMenu$1;
var HamburgerMenu = AWMenu$1;
// MobileFileSystem plugin and alias -- [mobile]
var MobileFileSystem = AWMobileFileSystem$1;
var AWMobileFileSystem$$1 = AWMobileFileSystem$1;
// NotificationManager plugin and alias -- [mobile]
var NotificationManager = AWNotificationManager$1;
var AWNotificationManager$$1 = AWNotificationManager$1;
// OfflineManager plugin and alias -- [mobile]
var OfflineManager = AWOfflineManager$1;
var AWOfflineManager$$1 = AWOfflineManager$1;
// Page plugin and alias -- [mobile]
var Page = AWPage$1;
var AWPage$$1 = AWPage$1;
// Print plugin and alias --[desktop]
var Print$$1 = AWPrint$1;
var AWPrint$$1 = AWPrint$1;
// QRReader plugin and alias -- [mobile]
var QRReader$$1 = AWQRReader$1;
var AWQRReader$$1 = AWQRReader$1;
// Realm plugin and alias -- [mobile]
var Realm$$1 = AWRealm$1;
var AWRealm$$1 = AWRealm$1;
// Scanner plugin and alias -- [mobile]
var Scanner$$1 = AWScanner$1;
var AWScanner$$1 = AWScanner$1;
// SecureStorage plugin and alias -- [mobile]
var SecureStorage$$1 = AWSecureStorage$1;
var AWSecureStorage$$1 = AWSecureStorage$1;
// Shake plugin and alias -- [mobile]
var Shake$$1 = AWShake$1;
var AWShake$$1 = AWShake$1;
// Vibration plugin and alias -- [mobile]
var Vibration = AWVibration$1;
var AWVibration$$1 = AWVibration$1;
// Webview plugin and alias -- [mobile]
var WebView = AWWebView$1;
var AWWebView$$1 = AWWebView$1;
// FileSystem -- [desktop]
var AWFileSystem$$1 = AWFileSystem$1;

exports.Accelerometer = Accelerometer;
exports.AWAccelerometer = AWAccelerometer$$1;
exports.Anonymous = Anonymous;
exports.AWAnonymous = AWAnonymous$$1;
exports.AppManager = AppManager;
exports.AWAppManager = AWAppManager$$1;
exports.Auth = Auth;
exports.AWAuth = AWAuth$$1;
exports.Cache = Cache;
exports.AWCache = AWCache$$1;
exports.Calendar = Calendar;
exports.AWCalendar = AWCalendar$$1;
exports.Camera = Camera$1;
exports.AWCamera = AWCamera$$1;
exports.Compass = Compass;
exports.AWCompass = AWCompass$$1;
exports.Component = Component;
exports.AWComponent = AWComponent$$1;
exports.Contacts = Contacts;
exports.AWContacts = AWContacts$$1;
exports.Device = Device;
exports.AWDevice = AWDevice$$1;
exports.FileChooser = FileChooser;
exports.AWFileChooser = AWFileChooser$$1;
exports.FileTransfer = FileTransfer$1;
exports.AWFileTransfer = AWFileTransfer$$1;
exports.Finder = Finder;
exports.AWFinder = AWFinder$$1;
exports.Globalization = Globalization;
exports.AWGlobalization = AWGlobalization$$1;
exports.HeaderBar = HeaderBar;
exports.Header = Header;
exports.AWHeader = AWHeader$$1;
exports.AWHeaderBar = AWHeaderBar$$1;
exports.Keyboard = Keyboard;
exports.AWKeyboard = AWKeyboard$$1;
exports.Location = Location;
exports.AWLocation = AWLocation$$1;
exports.Launcher = Launcher;
exports.AWLauncher = AWLauncher$$1;
exports.Media = Media$1;
exports.AWMedia = AWMedia$$1;
exports.MediaCapture = MediaCapture;
exports.AWMediaCapture = AWMediaCapture$$1;
exports.Menu = Menu;
exports.AWMenu = AWMenu$$1;
exports.AWHamburgerMenu = AWHamburgerMenu;
exports.HamburgerMenu = HamburgerMenu;
exports.MobileFileSystem = MobileFileSystem;
exports.AWMobileFileSystem = AWMobileFileSystem$$1;
exports.NotificationManager = NotificationManager;
exports.AWNotificationManager = AWNotificationManager$$1;
exports.OfflineManager = OfflineManager;
exports.AWOfflineManager = AWOfflineManager$$1;
exports.Page = Page;
exports.AWPage = AWPage$$1;
exports.Print = Print$$1;
exports.AWPrint = AWPrint$$1;
exports.QRReader = QRReader$$1;
exports.AWQRReader = AWQRReader$$1;
exports.Realm = Realm$$1;
exports.AWRealm = AWRealm$$1;
exports.Scanner = Scanner$$1;
exports.AWScanner = AWScanner$$1;
exports.SecureStorage = SecureStorage$$1;
exports.AWSecureStorage = AWSecureStorage$$1;
exports.Shake = Shake$$1;
exports.AWShake = AWShake$$1;
exports.Vibration = Vibration;
exports.AWVibration = AWVibration$$1;
exports.WebView = WebView;
exports.AWWebView = AWWebView$$1;
exports.AWFileSystem = AWFileSystem$$1;

}((this.Appworks = this.Appworks || {})));
//# sourceMappingURL=appworks.js.map
