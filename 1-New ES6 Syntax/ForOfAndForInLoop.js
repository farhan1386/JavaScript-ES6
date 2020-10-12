/*
The for...of statement creates a loop iterating over iterable objects,
including: built-in String, Array, array-like objects 
(e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined 
iterables. It invokes a custom iteration hook with statements to be executed
for the value of each distinct property of the object.
*/
const numbers = [1, 5, 4, 6, 7, 8, 9, 2];

for (let number of numbers) {
  console.log(number);
}

/*
The for...in statement iterates over all enumerable properties of 
an object that are keyed by strings (ignoring ones keyed by Symbols),
including inherited enumerable properties.
*/
const weekDays = [
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
for (let day in weekDays) {
  console.log(day, weekDays[day]);
}
