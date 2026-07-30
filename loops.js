
for (let i = 0; i <= 25; i++) {
    console.log('test of i is: ' + i);

}

console.log('***********************************');

const age = [25, 35, 45, 55, 65, 75, 100];

for (const a of age) {
    console.log(a);

}

console.log('***********************************');
for (let i = 0; i < age.length; i++) {
    console.log(age[i]);

}

console.log('***********************************');
let p = 1; // initialize p to 1
while (p <= 10) { // condition of while loop
    console.log('Value of p is: ' + p);
    p++; // this will increment the value of p by 1

}

console.log('***********************************');

let num = 25;
do {
    console.log(num);
    num++;
} while (num <= 10);

