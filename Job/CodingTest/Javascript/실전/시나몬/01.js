function solution(P, S) {
  const getCount = (number, password) => {
    const forword = (password - number + 10) % 10;
    const backward = (number - password + 10) % 10;

    return Math.min(forword, backward);
  };

  let reponse = 0;

  for (let i = 0; i < P.length; i++) {
    reponse += getCount(Number(P[i]), Number(S[i]));
  }

  return reponse;
}

// 테스트
const currentNumber = "82195";
const password = "64723";
const result = solution(currentNumber, password);
console.log("최소 회전 횟수:", result);
