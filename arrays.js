let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num1.push(11); //add value in last
console.log(num1);
console.log("************************************************");

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num2.pop() // remove the last value
console.log(num2);
console.log("************************************************");

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num3.shift(); // remove the first value
console.log(num3);
console.log("************************************************");

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num4.unshift(0); //add value in first
console.log(num4);
console.log("************************************************");

let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
num5.splice(2, 2); // remove the 2 value from index 2 and add 100 and 200
console.log(num5);
console.log("************************************************");


let num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num7 = num6.slice(2, 4); // create a copy of array from index 2 to 4
console.log(num6);
console.log(num7);
console.log("************************************************");

let num8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num9 = [20, 30, 40];
console.log(num8.concat(num9));
console.log("************************************************");


let num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num10.indexOf(5));
console.log("************************************************");

let num11 = ["lloyd", "walton"];
console.log(num11.includes("lloyd", "test"));
console.log("************************************************")


let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const a in n) { // give the index

    console.log(n[a]);

}
console.log('****************************************************************');
for (const a1 of n) { // give the values

    console.log(a1);

}

n.forEach(num11 => {
    console.log(num11 * 100);

});