# Gestures

Implementation of popular gestures (swipe, longpress, pinch, ...) in pure JavaScript. It should be noted that this library is still under heavy development. If you have some suggestions, please feel free to create a new issue.

# Documentation

* [doubleTap](#doubleTap)
* [longpress](#longpress)
* [swipe](#swipe)
* [tripleTap](#tripleTap)

<a name="doubleTap">
## DoubleTap

### Parameters

* `selector`
* `handlers`

```javascript
Gestures.doubleTap('div', function(event) {
  // Do something
});
```

<a name="longpress">
## Longpress

### Parameters

* `selector`
* `handler`

```javascript
Gestures.longpress('a.myLongpressLink', function(event) {
  // Do something
});
```

<a name="swipe">
## Swipe

### Parameters

* `selector`
* `handlers`

```javascript
Gestures.swipe('div', {
  left: function(event) { ... },
  right: function(event) { ... },
  top: function(event) { ... },
  bottom: function(event) { ... }
});
```

### Aliases

* `swipeLeft`
* `swipeRight`
* `swipeTop`
* `swipeBottom`

```javascript
Gestures.swipeLeft('div', function(event) {
  // Do something
});
```

<a name="tripleTap">
## TripleTap

### Parameters

* `selector`
* `handlers`

```javascript
Gestures.tripleTap('div', function(event) {
  // Do something
});
```

# Roadmap

* rotate
* multi-touch
* two fingers scroll
* four fingers...

# License

(The MIT License)

Copyright (c) 2011 František Hába &lt;hello@frantisekhaba.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.