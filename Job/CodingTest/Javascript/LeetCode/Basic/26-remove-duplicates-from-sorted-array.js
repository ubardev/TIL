// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }

//   return nums.length;
// };

var removeDuplicates = function (nums) {
  nums.splice(0, nums.length, ...new Set(nums));
  return nums.length;
};

const param = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = removeDuplicates(param);
console.log(result);
