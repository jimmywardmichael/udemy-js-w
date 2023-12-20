// const myString = 'developer';
//
// let myNewString;
//
// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
//
// console.log(myNewString);
//
// const x = Math.floor(Math.random() * 100 + 1);
// const y = Math.floor(Math.random() * 50 + 1);
//
// const sum = x + y;
// const sumOutput = `${x} + ${y} = ${sum}`;
// console.log(sumOutput);


//Strings and properties
// const s = new String('Hello World');
// x = typeof s;
// x = s.length;
//
// //Access value by key
// x = s[0];
// x = s._proto_;
//
// x = s.toUpperCase();
// x = s.toLowerCase();
//
// x = s.charAt(4)
// x = s.substring(0,4);
// x = s.substring(7)
// x = s.replace('World', 'James');
// x = s.includes('Hel');
// x = s.split('');
// console.log(x);
const myString = 'developer';
let myNewString;

//solution 1 capital challenge
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1, 9);

console.log(myNewString)