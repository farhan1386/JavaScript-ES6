/*
ES6 provides a new kind of parameter so-called rest parameter that
has a prefix of three dots (...).  The rest parameter allows you 
to represent an indefinite number of arguments as an array.
*/

console.log(sum(1, 2, 3, 4, 5, 6));
function sum(...args) {
  let total = 0;
  for (let value of args) {
    total += value;
  }
  return total;
}

let result = add(10, "Hi", null, undefined, 20);
console.log(result);

function add(...args) {
  return args
    .filter((e) => typeof e === "number")
    .reduce((prev, curr) => prev + curr);
}
