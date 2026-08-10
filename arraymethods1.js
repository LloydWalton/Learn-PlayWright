//every

let num = [1, 2, 3, 4, 5];
let result = num.every((e) => e > 0);
console.log("result is: ", result);

//some


let num1 = [1, 2, 3, 4, 5];
let result1 = num1.some((e) => e > 2);
console.log("result is: ", result1);

//find  

let num2 = [1, 2, 3, 4, 5, 6]
let result2 = num2.find((e) => e > 2);
console.log("result is: ", result2);

//indexof

let num3 = [1, 2, 3, 4, 5];
let result3 = num3.indexOf(5);
console.log("result is: ", result3);

let fruits = ["apple", "banana", "orange", "grape"];
let result4 = fruits.indexOf("orange");
console.log("result is: ", result4);


//lastindexof

let fruits1 = ["apple", "banana", "orange", "grape", "apple"];
let result5 = fruits1.lastIndexOf("apple");
console.log("result is: ", result5);

//reverse

let fruits2 = ["apple", "banana", "orange", "grape", 1, 3];
let result6 = fruits2.reverse();
console.log("result is: ", result6);


//sort

let fruits3 = ["apple", "banana", "orange", "grape", 1, 4, "Tshirt"];
let result7 = fruits3.sort();
console.log("result is: ", result7);
