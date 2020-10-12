/*
ES5 provided numeric literals in octal (prefix 0), decimal (no prefix),
and hexadecimal ( 0x). ES6 added support for binary literals and changed
the way it represents octal literals.
*/

// Octal literals

let a = 051;
console.log(a); // 41

// Note: You can not use Octal literal in "use strict" mode.

"use strict"
let b = 058; // invalid octal 
console.log(b);

// Binary literals
let e = parseInt('111',2);
console.log(e); // 7