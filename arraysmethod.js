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
