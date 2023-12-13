var plusOne = function (digits) {
  const digitsNumber = BigInt(digits.join(""));

  return String(digitsNumber + 1n)
    .split("")
    .map(Number);
};

const params = [1, 2, 3];
const result = plusOne(params);
console.log(result);
