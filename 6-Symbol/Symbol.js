/*
ES6 added Symbol as a new primitive type. Unlike other primitive types 
such as number, boolean, null, undefined, and string, the symbol type 
doesn’t have a literal form.
*/

let symbol=('mySymbol');
console.log(symbol);

let firstName = Symbol('Farhan'),
    lastName = Symbol('Ahmed');

console.log(firstName);
console.log(lastName);

console.log(typeof firstName);
