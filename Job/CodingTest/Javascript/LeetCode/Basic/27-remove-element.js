var removeElement = function (nums, val) {
  const filteredNums = nums.filter((num) => num !== val);

  nums.splice(0, nums.length, ...filteredNums);

  return nums.length;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const result = removeElement(nums, val);
console.log(result);
