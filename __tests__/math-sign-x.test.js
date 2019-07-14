import mathSign, {sign2016} from '../src/math-sign-x';

/* eslint-disable-next-line lodash/prefer-noop */
const ifFunctionsHaveNamesIt = function foo() {}.name === 'foo' ? it : xit;

const isPositiveZero = function(zero) {
  return zero === 0 && 1 / zero === Infinity;
};

const isNegativeZero = function(zero) {
  return zero === 0 && 1 / zero === -Infinity;
};

const numberIsNaN = function(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
};

describe('mathSign', function() {
  describe('basic', function() {
    it('mathSign is a function', function() {
      expect.assertions(1);
      expect(typeof mathSign).toBe('function');
    });

    it('mathSign2016 is a function', function() {
      expect.assertions(1);
      expect(typeof sign2016).toBe('function');
    });

    it('mathSign is not mathSign2016', function() {
      expect.assertions(1);
      expect(mathSign).not.toBe(sign2016);
    });

    it('mathSign is mathSign2018', function() {
      expect.assertions(1);
      expect(mathSign).toBe(mathSign);
    });
  });

  describe('mathSign2016', function() {
    ifFunctionsHaveNamesIt('has the right name', function() {
      expect.assertions(1);
      expect(sign2016.name).toBe('sign2016');
    });

    it('has the right arity', function() {
      expect.assertions(1);
      expect(sign2016).toHaveLength(1);
    });

    it('should be correct', function() {
      expect.assertions(29);
      // we also verify that [[ToNumber]] is being called
      [Infinity, 1, '0o10', '0b10', ' \t\r\n1 \t\r\n'].forEach(function(value) {
        expect(sign2016(value)).toBe(1);
        expect(sign2016(String(value))).toBe(1);
      });
      expect(sign2016(true)).toBe(1);

      [-Infinity, -1].forEach(function(value) {
        expect(sign2016(value)).toBe(-1);
        expect(sign2016(String(value))).toBe(-1);
      });

      expect(isPositiveZero(sign2016(+0))).toBe(true);
      expect(isPositiveZero(sign2016('0'))).toBe(true);
      expect(isPositiveZero(sign2016('+0'))).toBe(true);
      expect(isPositiveZero(sign2016(''))).toBe(true);
      expect(isPositiveZero(sign2016(' '))).toBe(true);
      expect(isPositiveZero(sign2016(null))).toBe(true);
      expect(isPositiveZero(sign2016(false))).toBe(true);
      expect(isNegativeZero(sign2016(-0))).toBe(true);
      expect(isNegativeZero(sign2016('-0'))).toBe(true);
      expect(numberIsNaN(sign2016(NaN))).toBe(true);
      expect(numberIsNaN(sign2016('\u0085\u200b\ufffe0\u0085\u200b\ufffe'))).toBe(true);
      expect(isPositiveZero(sign2016('\u180e0\u180e'))).toBe(true);
      expect(numberIsNaN(sign2016('NaN'))).toBe(true);
      expect(numberIsNaN(sign2016(undefined))).toBe(true);
    });
  });

  describe('mathSign2018', function() {
    ifFunctionsHaveNamesIt('has the right name', function() {
      expect.assertions(1);
      expect(mathSign.name).toBe('sign2018');
    });

    it('has the right arity', function() {
      expect.assertions(1);
      expect(mathSign).toHaveLength(1);
    });

    it('should be correct', function() {
      expect.assertions(29);
      // we also verify that [[ToNumber]] is being called
      [Infinity, 1, '0o10', '0b10', ' \t\r\n1 \t\r\n'].forEach(function(value) {
        expect(mathSign(value)).toBe(1);
        expect(mathSign(String(value))).toBe(1);
      });
      expect(mathSign(true)).toBe(1);

      [-Infinity, -1].forEach(function(value) {
        expect(mathSign(value)).toBe(-1);
        expect(mathSign(String(value))).toBe(-1);
      });

      expect(isPositiveZero(mathSign(+0))).toBe(true);
      expect(isPositiveZero(mathSign('0'))).toBe(true);
      expect(isPositiveZero(mathSign('+0'))).toBe(true);
      expect(isPositiveZero(mathSign(''))).toBe(true);
      expect(isPositiveZero(mathSign(' '))).toBe(true);
      expect(isPositiveZero(mathSign(null))).toBe(true);
      expect(isPositiveZero(mathSign(false))).toBe(true);
      expect(isNegativeZero(mathSign(-0))).toBe(true);
      expect(isNegativeZero(mathSign('-0'))).toBe(true);
      expect(numberIsNaN(mathSign(NaN))).toBe(true);
      expect(numberIsNaN(mathSign('\u0085\u200b\ufffe0\u0085\u200b\ufffe'))).toBe(true);
      expect(numberIsNaN(mathSign('\u180e0\u180e'))).toBe(true);
      expect(numberIsNaN(mathSign('NaN'))).toBe(true);
      expect(numberIsNaN(mathSign(undefined))).toBe(true);
    });
  });
});
