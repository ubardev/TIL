function solution(score) {
  const n = score.length;
  const candyCount = new Array(n).fill(1); // 최소 1개 사탕 셋팅

  // left -> right 순회
  for (let i = 1; i < n; i++) {
    if (score[i] > score[i - 1]) {
      candyCount[i] = candyCount[i - 1] + 1;
    }
  }

  // right -> left 순회
  for (let i = n - 2; i >= 0; i--) {
    if (score[i] > score[i + 1]) {
      candyCount[i] = Math.max(candyCount[i], candyCount[i + 1] + 1);
    }
  }

  // totalCount
  const totalCandyCount = candyCount.reduce((sum, count) => sum + count, 0);

  return [candyCount, totalCandyCount];
}

const score = [4, 6, 4, 5, 6, 2];
// const score = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1];

const [candyCount, totalCandyCount] = solution(score);

console.log("- 각자 받은 사탕 개수 :", candyCount);
console.log("- 구입한 사탕 개수 :", totalCandyCount);
