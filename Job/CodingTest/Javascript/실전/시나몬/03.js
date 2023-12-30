function solution(numbers, k) {
  const n = numbers.length;
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  // 각 원소의 인덱스를 저장하는 객체
  const indexMap = {};

  // indexMap 초기화
  for (let i = 0; i < n; i++) {
    indexMap[sortedNumbers[i]] = i;
  }

  let swaps = 0;

  for (let i = 0; i < n; i++) {
    const currentNumber = numbers[i];

    // 현재 위치와 정렬된 순서에서의 목표 위치의 차이 계산
    const diff = Math.abs(i - indexMap[currentNumber]);

    // 차이가 k 이상이면 Swap이 필요
    if (diff > k) {
      // 현재 위치의 숫자와 목표 위치의 숫자를 서로 Swap
      const temp = numbers[i];
      numbers[i] = sortedNumbers[i];
      numbers[indexMap[currentNumber]] = temp;

      // Swap 후 indexMap 업데이트
      indexMap[currentNumber] = indexMap[sortedNumbers[i]];
      indexMap[sortedNumbers[i]] = i;

      swaps++;
    }
  }

  return swaps;
}

// 테스트
const numbers = [10, 40, 30, 20];
const k = 20;
const result = solution(numbers, k);
console.log(result); // 예상 출력: 1
