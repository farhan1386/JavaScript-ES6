/*
ES6 provides a new operator called spread operator that consists of three
dots (...). The spread operator allows you to spread out elements of an
iterable object such as an array,a  map, or a set. 
*/


const oddNumber=[1,3,5,7,9];
const combineNumber=[2,4,6,8,...oddNumber];

console.log(combineNumber);