let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수

console.log(integer, negative, double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수

console.log(binary, octal, hex);

console.log(0 / 123); // 0
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'test'); // NaN(Not a number)

let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
