//1. function declaration


function add(a, b) {
    return a + b;
}


let result = add(2, 4);
console.log("result is: ", result);


function printMsg() {
    console.log("hello everyone");
}
printMsg();



//2. funtion expression


var test = function (x, y) {
    return x * y;

}
let result1 = test(2, 4);
console.log(result1);


//3. arrow functions

var divide = (t1, t2) => t1 / t2;

let result2 = divide(10, 2);
console.log(result2);

// 4. constructor functions


let sub2 = new Function('a', 'b', 'return a-b;');


let result3 = sub2(10, 3);

console.log(result3);
