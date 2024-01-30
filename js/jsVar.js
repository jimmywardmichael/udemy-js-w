// var tweet = prompt("Compose your tweet:");
// // var tweetCount = tweet.length;
// alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining.");

// alert(prompt("Compose your tweet:").slice(0,140));

var name = prompt("What is your name?");

var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
var capitalisedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalisedName);