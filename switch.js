const prompt = require("prompt-sync")();
var a = parseInt(prompt("enter 1st no"));
var b = parseInt(prompt("enter 2nd no"));
var op = prompt("enter a operator");

switch(op){
    case '+':
        console.log("result is: ",a+b);
        break;
    case '-':
        console.log("result is: ",a-b);
        break;
    case '*':
        console.log("result is: ",a*b);
            break;
    case '/':
        console.log("result is: ",a/b);
        break;
    default:
        console.log("ibvalid op");
        break;
}