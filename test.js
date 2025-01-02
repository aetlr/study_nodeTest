
function reverse(string) {
    var x = '';
    for (var i = string.length; i >= 0; i--) {
        x += string.charAt(i);
    }
    console.log(x);
}

function calc(left, expr, right) {
    switch (expr) {
        case '+':
            console.log(left + " " + expr + " " + right + " = " + (left + right));
            break;
        case '-':
            console.log(left + " " + expr + " " + right + " = " + (left - right));
            break;
        case '*':
             console.log(left + " " + expr + " " + right + " = " + (left * right));
            break;
        case '/':
            console.log(left + " " + expr + " " + right + " = " + (left / right));
            break;
    }
}

const fs = require('node:fs').promises;
async function save(content) {
    await fs.writeFile('C:/Temp/test.txt', content);
    const data = await fs.readFile('C:/Temp/test.txt', { encoding: 'utf8' });
    console.log(data);
}

var arr = [];
var x = 0;

for (var i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 9) + 1;
    x += arr[i];
}

arr.sort();

var x = '';
arr.forEach(number => x += number + " ");

console.log(x);


var s1 = 'Hello';
var s2 = 'Happy'

reverse(s1);
reverse(s2);

calc(1, '+', 2);
calc(5, '*', 4);

save(s1 + " " + s2);