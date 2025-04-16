// Inflearn
// function solution(n) {
//     let answer = [];
//     let check = Array.from({length: n + 1}, () => 0)
//
//     function dfs(index) {
//         if (index === n + 1) {
//             let temp = "";
//             for (let i = 0; i <= n; i++) {
//                 if (check[i] !== 0) {
//                     temp += i + " ";
//                 }
//             }
//             if (temp.length > 0) {
//                 answer.push(temp.trim());
//             }
//         } else {
//             check[index] = 1;
//             dfs(index + 1);
//             check[index] = 0;
//             dfs(index + 1)
//         }
//     }
//
//     dfs(1);
//
//     console.log(answer.join("\n"));
// }

// GPT
// function solution(n) {
//     const result = [];
//     const subset = [];
//
//     function dfs(index) {
//         if (index === n + 1) {
//             if (subset.length > 0) {
//                 result.push(subset.join(' '));
//             }
//             return;
//         }
//
//         // 현재 숫자를 포함
//         subset.push(index);
//         dfs(index + 1);
//
//         // 현재 숫자를 포함하지 않음
//         subset.pop();
//         dfs(index + 1);
//     }
//
//     dfs(1);
//     console.log(result.join('\n'));
// }

function solution(n) {
    const result = [];
    const subset = [];

    function dfs(index) {
        if (index === n + 1) {
            if (subset.length > 0) {
                result.push(subset.join(' '));
            }
            return;
        }

        subset.push(index);
        dfs(index + 1);
        subset.pop();
        dfs(index + 1);
    }

    dfs(1);
    console.log(result.join('\n'));
}

solution(3);