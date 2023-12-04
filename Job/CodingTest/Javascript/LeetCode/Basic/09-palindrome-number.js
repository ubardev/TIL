// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = function (x) {
//   if (x < 0) return false;

//   return x === Number(x.toString().split("").reverse().join(""));
// };

const isPalindrome = function (x) {
  const str = x.toString();
  const length = str.length / 2;

  for (let i = 0; i < length; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
};

const result = isPalindrome(1000030001);

console.log(result);
