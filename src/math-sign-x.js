import toNumber from 'to-number-x';
import numberIsNaN from 'is-nan-x';

/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2019).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */
const sign = function sign(x) {
  const n = toNumber(x);

  if (n === 0 || numberIsNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

export default sign;
