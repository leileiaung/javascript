//var, let, const
// var hello;
// hello = "hello"
// console.log(hello)

// var hello = 20
// console.log("======================");
// console.log(hello);
// console.log("====================");

// let apple = "apple"
// apple = "orange"
// console.log("===>", apple);

// let apple2 = 300;
// apple2 = "400"
// console.log(apple2);


var num1 = 100;
if (true) {
    var num1 = 300000
    console.log('inside num1', num1);
}
console.log('outside num1 =>', num1); //output is 300000             

// let and const are scope variable

let num2 = 100;
if (true) {
    let num2 = 50000;
    console.log('inside num2', num2);
}
console.log('outside num2 =>', num2);

const num3 = 100;
if (true) {
    const num3 = 800;
    console.log('inside num3', num3);
}
console.log('outside num3 =>', num3);