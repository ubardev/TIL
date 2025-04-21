// function toBinary(n) {
//     if (n === 0) return '';
//     return toBinary(Math.floor(n / 2)) + String(n % 2);
// }

function toBinary(n) {
    if (n === 0) return '';
    return toBinary(Math.floor(n / 2)) + String(n % 2);
}

const input = 11;

if (input === 0) {
    console.log(0);
} else {
    console.log(toBinary(input));
}