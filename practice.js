// function newParagraph()
// {
// var elementH = document.createElement("h2");
// var main = document.getElementById("main");
// main.appendChild(elementH);
// var textH = document.createTextNode("My Marriage");
// elementH.appendChild(textH);
// var element = document.createElement("p");
// main.appendChild(element);
// }


const prompt = require("prompt-sync")();
function gradeCalc(m,p,c){
    var m = parseInt(prompt("enter maths marks"));
    var p = parseInt(prompt("enter phys marks"));
    var c = parseInt(prompt("enter chem marks"));
    avg=(m+p+c)/3;
    if(avg<70){
        console.log("grade is C");
    }
    else if(avg>70&&avg<90){
        console.log("grade is B");
    }
    else if(avg>90){
        console.log("grade is A");
    }
}
gradeCalc();


