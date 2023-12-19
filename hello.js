const myString = 'developer';

let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 500 + 1);

const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);
