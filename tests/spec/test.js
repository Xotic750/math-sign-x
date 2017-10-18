'use strict';

var lib;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  lib = require('../../index.js');
} else {
  lib = returnExports;
}

var mathSign = lib.sign;
var mathSign2016 = lib.sign2016;
var mathSign2018 = lib.sign2018;

var ifFunctionsHaveNamesIt = function foo() {}.name === 'foo' ? it : xit;

var isPositiveZero = function (zero) {
  return zero === 0 && 1 / zero === Infinity;
};

var isNegativeZero = function (zero) {
  return zero === 0 && 1 / zero === -Infinity;
};

var numberIsNaN = function (value) {
  return value !== value;
};

describe('mathSign', function () {
  describe('basic', function () {
    it('mathSign is a function', function () {
      expect(typeof mathSign).toBe('function');
    });

    it('mathSign2016 is a function', function () {
      expect(typeof mathSign2016).toBe('function');
    });

    it('mathSign is not mathSign2016', function () {
      expect(mathSign).not.toBe(mathSign2016);
    });

    it('mathSign is mathSign2018', function () {
      expect(mathSign).toBe(mathSign2018);
    });
  });

  describe('mathSign2016', function () {
    ifFunctionsHaveNamesIt('has the right name', function () {
      expect(mathSign2016.name).toBe('sign2016');
    });

    it('has the right arity', function () {
      expect(mathSign2016.length).toBe(1);
    });

    it('should be correct', function () {
      // we also verify that [[ToNumber]] is being called
      [
        Infinity,
        1,
        '0o10',
        '0b10',
        ' \t\r\n1 \t\r\n'
      ].forEach(function (value) {
        expect(mathSign2016(value)).toBe(1);
        expect(mathSign2016(String(value))).toBe(1);
      });
      expect(mathSign2016(true)).toBe(1);

      [-Infinity, -1].forEach(function (value) {
        expect(mathSign2016(value)).toBe(-1);
        expect(mathSign2016(String(value))).toBe(-1);
      });

      expect(isPositiveZero(mathSign2016(+0))).toBe(true);
      expect(isPositiveZero(mathSign2016('0'))).toBe(true);
      expect(isPositiveZero(mathSign2016('+0'))).toBe(true);
      expect(isPositiveZero(mathSign2016(''))).toBe(true);
      expect(isPositiveZero(mathSign2016(' '))).toBe(true);
      expect(isPositiveZero(mathSign2016(null))).toBe(true);
      expect(isPositiveZero(mathSign2016(false))).toBe(true);
      expect(isNegativeZero(mathSign2016(-0))).toBe(true);
      expect(isNegativeZero(mathSign2016('-0'))).toBe(true);
      expect(numberIsNaN(mathSign2016(NaN))).toBe(true);
      expect(numberIsNaN(mathSign2016('\u0085\u200b\ufffe0\u0085\u200b\ufffe'))).toBe(true);
      expect(isPositiveZero(mathSign2016('\u180e0\u180e'))).toBe(true);
      expect(numberIsNaN(mathSign2016('NaN'))).toBe(true);
      expect(numberIsNaN(mathSign2016(undefined))).toBe(true);
    });
  });

  describe('mathSign2018', function () {
    ifFunctionsHaveNamesIt('has the right name', function () {
      expect(mathSign2018.name).toBe('sign2018');
    });

    it('has the right arity', function () {
      expect(mathSign2018.length).toBe(1);
    });

    it('should be correct', function () {
      // we also verify that [[ToNumber]] is being called
      [
        Infinity,
        1,
        '0o10',
        '0b10',
        ' \t\r\n1 \t\r\n'
      ].forEach(function (value) {
        expect(mathSign2018(value)).toBe(1);
        expect(mathSign2018(String(value))).toBe(1);
      });
      expect(mathSign2018(true)).toBe(1);

      [-Infinity, -1].forEach(function (value) {
        expect(mathSign2018(value)).toBe(-1);
        expect(mathSign2018(String(value))).toBe(-1);
      });

      expect(isPositiveZero(mathSign2018(+0))).toBe(true);
      expect(isPositiveZero(mathSign2018('0'))).toBe(true);
      expect(isPositiveZero(mathSign2018('+0'))).toBe(true);
      expect(isPositiveZero(mathSign2018(''))).toBe(true);
      expect(isPositiveZero(mathSign2018(' '))).toBe(true);
      expect(isPositiveZero(mathSign2018(null))).toBe(true);
      expect(isPositiveZero(mathSign2018(false))).toBe(true);
      expect(isNegativeZero(mathSign2018(-0))).toBe(true);
      expect(isNegativeZero(mathSign2018('-0'))).toBe(true);
      expect(numberIsNaN(mathSign2018(NaN))).toBe(true);
      expect(numberIsNaN(mathSign2018('\u0085\u200b\ufffe0\u0085\u200b\ufffe'))).toBe(true);
      expect(numberIsNaN(mathSign2018('\u180e0\u180e'))).toBe(true);
      expect(numberIsNaN(mathSign2018('NaN'))).toBe(true);
      expect(numberIsNaN(mathSign2018(undefined))).toBe(true);
    });
  });
});
