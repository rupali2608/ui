const prompt = require("prompt-sync")();
var str = prompt("enter a string: ");
var subStr = "is";
var check = str.includes(subStr);
console.log(check);
