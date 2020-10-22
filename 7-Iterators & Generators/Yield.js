// The yield keyword allows you to pause and resume a generator function (function*).

function* foo() { 
    yield 1;
    yield 2;
    yield 3;
}

let f = foo();

console.log(f.next());

function* baz() {
    let arr = [yield, yield];
    console.log(arr);
}

var z = baz();

console.log(z.next());  
console.log(z.next(1)); 
console.log(z.next(2));