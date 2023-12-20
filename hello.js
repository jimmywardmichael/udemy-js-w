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
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

//solution 2 capital challenge
myNewString = myString[0].charAt(0).toUpperCase() + myString.substring(1);

//solution 3 capital challenge
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;

console.log(myNewString)

/*

const myString = 'developer';
Here, you are declaring a constant variable myString and assigning it the string value 'developer'.

let myNewString;
You are declaring a variable myNewString using the let keyword but not assigning it any value at this point.

Now, let's go through each solution for capitalizing the first letter of myString:

Solution 1:
javascript

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
myString.charAt(0): This retrieves the character at the 0th index (first character) of myString.
.toUpperCase(): Converts the retrieved character to uppercase.
+: Concatenation operator.
myString.substring(1): Retrieves the substring of myString starting from index 1 (second character) to the end.
So, this line essentially capitalizes the first letter of myString and concatenates it with the rest of the string.

Solution 2:
javascript

myNewString = myString[0].charAt(0).toUpperCase() + myString.substring(1);
myString[0]: This directly retrieves the character at the 0th index (first character) of myString.
.charAt(0).toUpperCase(): Converts the retrieved character to uppercase.
+: Concatenation operator.
myString.substring(1): Retrieves the substring of myString starting from index 1 (second character) to the end.
This solution achieves the same result as Solution 1 but uses array notation (myString[0]) to access the first character.

Solution 3:
javascript
Copy code
myNewString = `${myString.charAt(0).toUpperCase()}${myString.substring(1)}`;
This uses a template literal (enclosed in backticks) to concatenate the uppercase first character of myString with the rest of the string.

In all three solutions, the result is stored in the variable myNewString.

javascript

console.log(myNewString);
Finally, you print the result to the console. This will show the string with the first letter capitalized.*/