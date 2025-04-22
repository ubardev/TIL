function solution(capacity, weights) {
  let max = 0;
  const n = weights.length;

  function DFS(index, sum) {
    if (sum > capacity) return;

    if (index === n) {
      max = Math.max(max, sum);
      return;
    }

    // 현재 바둑이 태우는 경우
    DFS(index + 1, sum + weights[index]);
    // 현재 바둑이 안 태우는 경우
    DFS(index + 1, sum);
  }

  DFS(0, 0);
  return max;
}

const capacity = 259;
const weights = [81, 58, 42, 33, 61]; // N = 5

console.log(solution(capacity, weights));