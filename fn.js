function hello() {
    console.log('Hello');
}

var hello2 = function() {
    console.log('Hello');
}

var hello = () => {
    console.log('Hello');
}

function testHello(myfn) {
    myfn();
}