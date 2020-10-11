/*
Default function parameters – learn how to set the default value for 
parameters of a function.

In JavaScript, a parameter has a default value of undefined. 
It means that if you don’t pass the arguments into the function, 
its parameters will have the default values of undefined.
*/

//Default function parameters
Greet();

function Greet(message) {
  console.log(message);
}

function Sum(x, y) {
  return x + y;
}

console.log(Sum(10, 20));
