const prompt = require("prompt-sync")();

let a = parseInt(prompt("enter 1st num"));
let b = parseInt(prompt("enter 2nd num"));
let opName=prompt("enter operator name");
switch(opName)
{
    case "Add":
       let z=a+b;
       
       console.log("The result is -" +z);
       break;
}

