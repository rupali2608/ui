const prompt = require("prompt-sync")();
var a = parseInt(prompt("enter 1st no"));
var b = parseInt(prompt("enter 2nd no"));
var op = prompt("enter a operator");

if(op==='+'){
    console.log("result is: ",a+b);
}
else if(op=='-'){
    console.log("result is: ",a-b);
}
if(op==='*'){
    console.log("result is: ",a*b);
}
else if(op=='/'){
    console.log("result is: ",a/b);
}
else{
    console.log("invalid op");
}