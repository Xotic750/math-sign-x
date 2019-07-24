import mathSign from '../src/math-sign-x';

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
  });

  describe('mathSign2018', function() {
    ifFunctionsHaveNamesIt('has the right name', function() {
      expect.assertions(1);
      expect(mathSign.name).toBe('sign');
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
