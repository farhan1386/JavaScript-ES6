/*
function add(x, y) {
  return x + y;
}

console.log(add(10, 20));
*/

// function expression that adds two numbers
let add = (x, y) => x + y;

console.log(add(50,100));

// if you use the block syntax, you need to specify the return keyword

// let add=(x,y)=>{return x+y;};

// arrow functions with multiple parameters
// Syntex:(p1, p2, ..., pn) => expression;

/*sort an array of numbers in the descending order, you use the sort() method
of the array object*/

/*let numbers=[5,6,4,3,2,1,8];

numbers.sort(function (a,b) {
  return b-a;
})*/

let numbers=[5,6,4,3,2,1,8];
numbers.sort((a,b)=>{return b-a;});

console.log(numbers)

// arrow functions with a single parameter
let names=['Arvid','Rajesh','Priya','Suresh']

let lengths=names.map(name=>name.length);
console.log(lengths);

// arrow functions with no parameter
let logDoc = () => console.log(window.document);
logDoc();

// Line break between parameter definition and arrow
let multiply = (x,y) => 
x * y;