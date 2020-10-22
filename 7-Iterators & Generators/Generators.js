/*
In JavaScript, a regular function is executed based on the run-to-completion
model. It cannot pause midway and then continues from where it paused.
*/

function myFunction(){
    console.log('I get-up early in the morning.');
    console.log('I have breakfast at 7:30 AM.');
    console.log('I leave for office at 8:00 AM')
}

myFunction();

/*
ES6 introduces a new kind of function that is different from a regular
function: function generator or generator.

A generator can pause midway and then continues from where it paused.
*/

function*generate(){
    console.log('Invoked 1st time.');
    yield 1;
    console.log('Invoked 2nd time.');
    yield 2;
}

let gen=generate();
console.log(gen);

let result = gen.next();
console.log(result);