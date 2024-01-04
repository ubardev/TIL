function solution(progresses, speeds) {
  let daysToComplete = progresses.map((progress, index) => {
    let remainingProgress = 100 - progress;
    return Math.ceil(remainingProgress / speeds[index]);
  });

  let result = [];
  let maxDay = daysToComplete[0];
  let count = 1;

  for (let i = 1; i < daysToComplete.length; i++) {
    if (daysToComplete[i] <= maxDay) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxDay = daysToComplete[i];
    }
  }

  result.push(count);

  return result;
}

// let progresses = [93, 30, 55];
// let speeds = [1, 30, 5];

let progresses = [95, 90, 99, 99, 80, 99];
let speeds = [1, 1, 1, 1, 1, 1];

let result = solution(progresses, speeds);

console.log("- 동시 출하 부품 수", result);
