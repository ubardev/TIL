// inflearn
// function solution(numbers) {
//   let answer = "NO";
//   const totalSum = numbers.reduce((acc, number) => acc + number, 0);
//   const numberCount = numbers.length;
//
//   function DFS(currentIndex, currentSubsetSum) {
//     if (answer === "YES") return;
//
//     if (currentIndex === numberCount) {
//       if ((totalSum - currentSubsetSum) === currentSubsetSum) answer = "YES";
//       return;
//     }
//
//     DFS(currentIndex + 1, currentSubsetSum + numbers[currentIndex]);
//     DFS(currentIndex + 1, currentSubsetSum);
//   }
//
//   DFS(0, 0);
//   return answer;
// }

// AI
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
  let answer = "NO";
  const totalSum = numbers.reduce((sum, num) => sum + num, 0);
  const numberCount = numbers.length;

  function dfs(currentIndex, currentSubsetSum) {
    if (answer === 'YES') return;

    if (currentIndex === numberCount) {
      if ((totalSum - currentSubsetSum) === currentSubsetSum) answer = "YES";
      return;
    }

    dfs(currentIndex + 1, currentSubsetSum + numbers[currentIndex])
    dfs(currentIndex + 1, currentSubsetSum)

  }

  dfs(0, 0);
  return answer;

}

const input = [1, 3, 5, 6, 7, 10];
console.log(solution(input));