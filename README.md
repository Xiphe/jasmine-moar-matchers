jasmine-moar-matchers
=====================

[![Build Status](https://travis-ci.org/Xiphe/jasmine-moar-matchers.svg)](https://travis-ci.org/Xiphe/jasmine-moar-matchers)

additional matchers for jasmine 2.0


Install
-------

	bower install jasmine-moar-matchers

then include any files from `lib` into before tests.


Use
---

All these examples are contain the minimal value to match
the expectation.


### toBeTypeOf

```js
expect('foo').toBeTypeOf('string');
```

### toBeInstanceOf

```js
expect([1, 2, 3]).toBeInstanceOf(Array);
```

### toBeAPromise

```js
expect({then: function() {}}).toBeAPromise();
```

### toBeAFullPromise

```js
expect({
	then: function() {},
	catch: function() {},
	finally: function() {}
}).toBeAFullPromise();
```

### toBeAQPromise

```js
expect({
	then: function() {},
	progress: function() {},
	catch: function() {},
	finally: function() {},
	done: function() {}
}).toBeAQPromise();
```

### toBeADeferred

```js
expect({
	resolve: function() {},
	reject: function() {}
}).toBeADeferred();
```

### toBeAQDeferred

```js
expect({
	promise: {},
	resolve: function() {},
	notify: function() {},
	reject: function() {}
}).toBeAQDeferred();
```

### toBeRejected

```js
expect({
	isRejected: function() {
		return true;
	}
}).toBeRejected();
```

### toBeResolved

```js
expect({
	isResolved: function() {
		return true;
	}
}).toBeResolved();
```

### toBePending

```js
expect({
	isPending: function() {
		return true;
	}
}).toBePending();
```


### toAngularEqual

```js
expect({a: 1}).toAngularEqual({a: 2, $hash: 'foo'});
```


LICENSE
-------

> The MIT License
>
> Copyright (c) 2014 Hannes Diercks
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.