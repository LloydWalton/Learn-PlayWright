/*
A more precise way to say it is:

var: Can be redeclared and reassigned.
let: Cannot be redeclared in the same scope, but can be reassigned.
const: Cannot be redeclared or reassigned. It must be initialized when declared.

💡 Terminology tip: Instead of saying "reinitialized," JavaScript developers usually say "reassigned."
*/

var name = "Lloyd Walton";
let age = "36";
const company = "Tata";

console.log(name, age, company);



if (age > 25) {
    console.log("Test");
    let name = 11;

}


console.log(name);
