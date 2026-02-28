/* https://www.acmicpc.net/problem/1929
  9935번: 문자열 폭발
  - stack 자료구조 사용
*/

const fs = require("fs");
const [ALL, BOMB] = fs.readFileSync(0, "utf-8").trim().split("\n");

function solution(all, bomb) {
  const stack = all.slice(0, bomb.length - 1).split("");

  for (let i = stack.length; i < all.length; i++) {
    if (stack.length < bomb.length - 1) {
      stack.push(all[i]);

      continue;
    }

    let str = "";

    for (let j = 0; j < bomb.length - 1; j++) {
      str += stack[stack.length - (bomb.length - 1 - j)];
    }

    str += all[i];

    if (str === bomb) {
      for (let j = 0; j < bomb.length - 1; j++) stack.pop();
    } else {
      stack.push(all[i]);
    }
  }

  return stack.length ? stack.join("") : "FRULA";
}

console.log(solution(ALL, BOMB));
