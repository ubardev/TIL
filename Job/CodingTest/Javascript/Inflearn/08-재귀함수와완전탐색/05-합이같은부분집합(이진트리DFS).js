// function solution(numbers) {
//   const numberCount = numbers.length;
//   let isPossible = false;
//
//   function DFS(level, sum, subset) {
//     if (isPossible) return;
//     if (level === numberCount) {
//       const remainingNumbers = numbers.filter((_, i) => !subset.includes(i));
//       const remainingSum = remainingNumbers.reduce((acc, num) => acc + num, 0);
//
//       if (sum === remainingSum) {
//         isPossible = true;
//       }
//       return;
//     }
//
//     DFS(level + 1, sum + numbers[level], [...subset, level]);
//     DFS(level + 1, sum, subset);
//   }
//
//   DFS(0, 0, []);
//
//   return isPossible ? "YES" : "NO";
// }


function solution(numbers) {
  const numberCount = numbers.length;
  let isPossible = false;

  function DFS(level, sum, subset) {
    if (isPossible) return;

    if (level === numberCount) {
      const remainingNumbers = numbers.filter((_, index) => !subset.includes(index));
      const remainingSum = remainingNumbers.reduce((acc, num) => acc + num, 0);;

      if (sum === remainingSum) {
        isPossible = true;
      }
      return;
    }

    DFS(level + 1, sum + numbers[level], [...subset, numbers[level]]);
    DFS(level + 1, sum, subset);
  }

  DFS(0, 0, []);

  return isPossible ? "YES" : "NO";
}

const input = [1, 3, 5, 6, 7, 10];
console.log(solution(input));