/*
An ES6 module is a JavaScript file that executes in strict mode only.
It means that any variables or functions declared in the module won’t
be added automatically to the global scope.
*/

import { message } from "./message.js";

const h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);
