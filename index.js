/**
 * @file ES6-compliant shim for Math.sign.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-math.sign|20.2.2.29 Math.sign(x)}
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-sign-x
 */

'use strict';

var toNumber = require('to-number-x');
var nativeSign = typeof Math.sign === 'function' && Math.sign;

var $sign;
if (nativeSign) {
  try {
    if (nativeSign(-10) === -1 && nativeSign(10) === 1 && 1 / nativeSign(-0) === 1 / -0) {
      var nonWS = [
        '\u0085',
        '\u200b',
        '\ufffe'
      ];

      var lacksOctalSupport = nativeSign('0o10') !== 1;
      var lacksBinarySupport = nativeSign('0b10') !== 1;
      var trimsNonWhitespace;
      for (var i = 0; i < nonWS.length; i += 1) {
        var c = nonWS[i];
        trimsNonWhitespace = nativeSign(c + 0 + c) === 0;
        // eslint-disable-next-line max-depth
        if (trimsNonWhitespace) {
          // eslint-disable-next-line no-restricted-syntax
          break;
        }
      }

      if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
        $sign = function sign(x) {
          return nativeSign(toNumber(x));
        };
      } else {
        $sign = nativeSign;
      }
    }
  } catch (ignore) {}
}

if (Boolean($sign) === false) {
  var numberIsNaN = require('is-nan');
  $sign = function sign(x) {
    var n = toNumber(x);
    if (n === 0 || numberIsNaN(n)) {
      return n;
    }

    return n > 0 ? 1 : -1;
  };
}

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero.
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 * @example
 * var mathSign = require('math-sign-x');
 *
 * mathSign(3);     //  1
 * mathSign(-3);    // -1
 * mathSign('-3');  // -1
 * mathSign(0);     //  0
 * mathSign(-0);    // -0
 * mathSign(NaN);   // NaN
 * mathSign('foo'); // NaN
 * mathSign();      // NaN
 */
module.exports = $sign;
