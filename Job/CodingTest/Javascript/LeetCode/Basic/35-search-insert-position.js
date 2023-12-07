var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};

const nums = [1, 3, 5, 6];
const target = 0;
const result = searchInsert(nums, target);
console.log(result);
