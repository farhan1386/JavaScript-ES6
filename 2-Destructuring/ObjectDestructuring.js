
// Perior ES6

const employee={
    firstName:'Farhan',
    lastName:'Ahmed'
}

console.log(employee.firstName);
console.log(employee.lastName);

// Now in ES6

/*
let { 
   property1: variable1,
   property2: variable2
} = object;
*/

let {
    firstName, 
    lastName
 } = employee;
 
console.log(firstName);
console.log(lastName);
