const readline = require('node:readline');
const rl = readline.createInterface({
        input: process.stdin,
    output: process.stdout,
});

const answer = Math.floor(Math.random() * 9) + 1;
let cnt = 0;

function f() {
    rl.question('숫자를 입력해주세요 : ', function(input) {
    var num = parseInt(input, 10); 
    if (num > answer) {
        console.log('크다');
        cnt++;
    } 
    else if (num < answer) {
        console.log('작다');
        cnt++;
    } 
    else {
        console.log(cnt + ' : O');
        rl.close();
        return;
    }

    f();
  });
}

f();
