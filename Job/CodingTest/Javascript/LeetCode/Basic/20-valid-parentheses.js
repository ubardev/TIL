/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length < 2) return;

  let tempArray = [];

  for (let char of s) {
    if (["(", "[", "{"].includes(char)) {
      tempArray.push(char);
    } else {
      const savedChar = tempArray.pop();

      if (!savedChar) return false;
      if (savedChar === "(" && char !== ")") return false;
      if (savedChar === "[" && char !== "]") return false;
      if (savedChar === "{" && char !== "}") return false;
    }
  }

  return tempArray.length === 0;
};

const param = ")(){}";
const result = isValid(param);
console.log(result);
