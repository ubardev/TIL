let tmp = []; // 큐 처럼 사용
let list = []; // 불길한 수 수열

function getUnluckyNumber(n) {
  let cnt = 0;
  tmp.push(4);
  tmp.push(13);

  while (true) {
    if (cnt > n) {
      break;
    }
    let num = tmp.shift();
    tmp.push(parseInt(num + "4"));
    tmp.push(parseInt(num + "13"));
    list.push(num);
    cnt++;
  }

  list.sort((a, b) => a - b); // 정렬
  return list[n - 1];
}

// 테스트
console.log(getUnluckyNumber(7));

function solution(n) {
  const tempList = [4, 13];
  const unluckyList = [];
  let count = 0;

  while (true) {
    if (count > n) break;

    let number = tempList.shift();
    tempList.push(Number(number + "4"));
    tempList.push(Number(number + "13"));
    unluckyList.push(number);
    count++;
  }

  unluckyList.sort((prev, next) => prev - next);

  return unluckyList[n - 1];
}
