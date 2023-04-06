/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let revNum = parseInt(x.toString().split("").reverse().join(""));
  return revNum === x;
};
