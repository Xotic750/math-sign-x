<a href="https://travis-ci.org/Xotic750/math-sign-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/math-sign-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/math-sign-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/math-sign-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/math-sign-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/math-sign-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/math-sign-x"
  title="npm version">
<img src="https://badge.fury.io/js/math-sign-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/math-sign-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/math-sign-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_math-sign-x"></a>

## math-sign-x

Shim for Math.sign.

### `module.exports(x)` ⇒ <code>\*</code> ⏏

<a name="module_math-sign-x"></a>

### `math-sign-x` ⇒ <code>number</code>

This method returns the sign of a number, indicating whether the number is positive,
negative or zero. (ES2019)

**Kind**: static property of [<code>math-sign-x</code>](#module_math-sign-x)  
**Returns**: <code>number</code> - A number representing the sign of the given argument. If the argument
is a positive number, negative number, positive zero or negative zero, the function will
return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.

| Param | Type            | Description |
| ----- | --------------- | ----------- |
| x     | <code>\*</code> | A number.   |

**Example**

```js
import mathSign from 'math-sign-x';

console.log(mathSign(3)); //  1
console.log(mathSign(-3)); // -1
console.log(mathSign('-3')); // -1
console.log(mathSign(0)); //  0
console.log(mathSign(-0)); // -0
console.log(mathSign(NaN)); // NaN
console.log(mathSign('foo')); // NaN
console.log(mathSign()); // NaN
```
