/* https://www.acmicpc.net/problem/1929
  1929번: 소수 구하기
  - 에라토스테네스의 체 알고리즘
*/

const fs = require("fs");
const [N, M] = fs.readFileSync(0, "utf-8").trim().split(" ").map(Number);

function solution(n, m) {
  const arr = Array(m + 1).fill(true);
  // 0과 1은 소수가 아니기 때문에 false로 변환
  arr[0] = false;
  arr[1] = false;

  // 2 * 4 = 4 * 2와 같이 대칭을 이루기 때문에 m의 제곱근 까지만 약수 여부를 검증
  for (let i = 2; i <= Math.sqrt(m); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= m; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr
    .map((v, i) => (v ? i : 0))
    .slice(n)
    .filter((a) => a);
}

console.log(solution(N, M).join("\n"));
