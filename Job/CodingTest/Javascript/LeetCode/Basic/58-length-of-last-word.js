var lengthOfLastWord = function (s) {
  const words = s.trim().split(" ");

  return words[words.length - 1].length;
};

// const params = "Hello World";
const params = "   fly me   to   the moon  ";
const result = lengthOfLastWord(params);
console.log(result);
