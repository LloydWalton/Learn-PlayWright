
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


console.log('****************************************************************');

for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        console.log("hi");
        //break;
    }
    else {
        console.log(i);
    }

}

console.log('****************************************************************');

const browser = ["chrome", "firefox", "edge", "safari"];

for (let a of browser) {

    if (a == "edge") {
        console.log("You are using edge browser");
        break; // 
    }
    else if (a == "firefox") {
        console.log("You are using firefox browser");
        break;
    }

}


console.log('****************************************************************');

//for in for objects

const user = { //object 
    "firstname": "John",
    "lastname": "Doe",
    "age": 30,
    "city": "New York"
};

console.log(user);

for (let obj in user) {

    console.log(obj + "  ->  " + user[obj]);

}


console.log('****************************************************************');


const age2 = [25, 35, 45, 55, 65, 75, 100];

for (const a in age2) { // give the index

    console.log(age2[a]);

}

for (const a1 of age2) { // give the values

    console.log(a1);

}