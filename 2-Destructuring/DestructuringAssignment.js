/*
ES6 provides a new feature called destructing assignment that allows 
you to destructure properties of an object or elements of an array into
individual variables.
*/

function getMarks() {
  return [80, 70, 60, 65, 85, 90];
}

let [hindi, english, physics, chemistry, mathematics, biology] = getMarks();

console.log(hindi);

// Array Destructuring Assignment and Rest syntax

function getScores() {
  return [10, 20, 30, 40, 50];
}

let [x, y, z, ...args] = getScores();
console.log(x);
console.log(args);
