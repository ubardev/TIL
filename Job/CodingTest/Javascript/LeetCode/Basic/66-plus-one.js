// var plusOne = function (digits) {
//   const digitsNumber = BigInt(digits.join(""));

//   return String(digitsNumber + 1n)
//     .split("")
//     .map(Number);
// };

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  digits.unshift(1);
  return digits;
};

const params = [9, 9];
const result = plusOne(params);
console.log(result);
