// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) return i;
//   }
//   return nums.length;
// };

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (nums[middle] !== target && left <= right) {
    if (target < nums[middle]) {
      // target이 작으면 right를 줄인다.
      right = middle - 1;
    } else {
      // target이 더크면 left를 늘린다.
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  // 같아서 while문이 끝난거면 middle, 달라서 마지막에 끝난거면 left의 값을 return한다.
  return nums[middle] === target ? middle : left;
};

const nums = [1, 3, 5, 6];
const target = 0;
const result = searchInsert(nums, target);
console.log(result);
