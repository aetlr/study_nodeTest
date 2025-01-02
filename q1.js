function f1(string) {
    if (string.length >= 5) {
        console.log(string + "의 길이는 5글자 이상");
    }
    else {
        console.log(string + "의 길이는 5글자 미만");
    }
}

function f2(string) {
    if (string.charAt(0) == string.charAt(string.length - 1)) {
        console.log(string + "은 첫 글자와 마지막 글자가 같음");
    }
    else {
        console.log(string + "은 첫 글자와 마지막 글자가 같지 않음");
    }
}

function f3(string) {
    arr = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i < arr.length; i++) {
        if (string.includes(arr[i])) {
            console.log(string + "은 모음 " + arr[i] + "가 있음");
        }
    }

    console.log("");
}

function f4(string) {
    f1(string);
    f2(string);
    f3(string);
}
s1 = 'apple';
s2 = 'school';
s3 = 'hi';
s4 = 'text';

f4(s1);
f4(s2);
f4(s3);
f4(s4)
