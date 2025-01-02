function f1(a, b) {
    console.log(a + b);
}

var f2 = function(a, b) { console.log(a + b) };

var f3 = (a, b) => console.log(a + b);

f1(2, 3);
f2(2, 3);
f3(3, 4);