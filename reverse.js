// var s = "abcdefgh";
// var str =" ";
// console.log(s);
// for(let i=s.length-1;i>=0; i--){
  //console.log(s[i]);
 //str+=s[i];
  //console.log(str=s[i]);
//}
//console.log(str);
//console.log("a"+"b");

// var s =" Welcome to this Javascript Guide!";
// var sArr = s.split(" ");
// var sArrRev = sArr.map((word)=>{
//   return word.split("").reverse().join("");
// }).join(" ");
// // var revS = sArrRev.join(' ');
// // revS = revS.join(' ');
// console.log(sArrRev);


var str = "welcome to this javascript guide!";
var newArr = str.split("").reverse().join("");
console.log(newArr);
var finArr = newArr.split(" ").reverse().join(" ");
console.log(finArr);


// let string = "Welcome to this Javascript Guide! "

// function reverseBySeparator(string) {
//     let srtArray = string.split("").reverse().join("")
//     console.log(srtArray);
//     let newArry = srtArray.split(" ").reverse().join(" ")

//     return newArry
// }
// let reverse = reverseBySeparator(string);

// console.log(reverse);