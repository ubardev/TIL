// 내 최초 풀이
// var isValid = function (s) {
//   if (s.length < 2) return;

//   let tempArray = [];

//   for (let char of s) {
//     if (["(", "[", "{"].includes(char)) {
//       tempArray.push(char);
//     } else {
//       const savedChar = tempArray.pop();

//       if (!savedChar) return false;
//       if (savedChar === "(" && char !== ")") return false;
//       if (savedChar === "[" && char !== "]") return false;
//       if (savedChar === "{" && char !== "}") return false;
//     }
//   }

//   return tempArray.length === 0;
// };

var isValid = function (s) {
  const bracketPair = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];

  for (i = 0; i < s.length; i++) {
    if (["(", "[", "{"].includes(s[i])) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== bracketPair[s[i]]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const param = ")(){}";
const result = isValid(param);
console.log(result);
