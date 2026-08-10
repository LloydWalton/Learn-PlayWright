//map
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = numbers.map((e) => e * 2);
console.log(result);


let farnheat = [85, 60, 80, 100];


function farnToCelcius(farn) {
    return (farn - 32) * 5 / 9;
}

let celcius = farnheat.map(farnToCelcius);
console.log(celcius);

//filter

let dummynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result1 = numbers.filter((e) => e % 2 == 0);
console.log(result1);


let employees = [
    {
        name: "john",
        age: 30,
        salary: 10000,
    },
    {
        name: "doe",
        age: 40,
        salary: 20000,
    },
    {
        name: "smith",
        age: 50,
        salary: 30000,
    },
    {
        name: "peter",
        age: 60,
        salary: 40000,

    }
]
let seniorEmployee = employees.filter((e) => e.age >= 50);
console.log(seniorEmployee);
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

let num = [1, 2, 3, 4, 5];

let total = num.reduce((acc, num) => acc + num, 0);

console.log(total);


// max number in array
console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

let numb = [10, 50, 30, 55, 12, 98];

const maxNumber = numb.reduce((max, num) => {
    if (num > max) {
        return num
    }
    else {
        return max;
    }
}, numb[0]
);
console.log("max number is: ", maxNumber);




let list = [
    {
        id: 1,
        name: "apple",
        price: 100
    },
    {
        id: 2,
        name: "banana",
        price: 200
    },
    {
        id: 3,
        name: "orange",
        price: 300
    },
    {
        id: 4,
        name: "grapes",
        price: 400
    },
    {
        id: 5,
        name: "mango",
        price: 500
    }

]
let totalPrice = list.reduce((totalprice, item) => {
    return totalprice + item.price;
}, 0)
console.log("total price is: ", totalPrice);

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");