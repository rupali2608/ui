                        //  current date and time
// var todayDate = new Date();
// var useString= todayDate.toDateString();
// console.log(todayDate);

                        
                    //  reversing a number
// function reverse(x){
//      x=x+"";
//      return x.split('').reverse().join('');
// }

// console.log(reverse(54321));


                    // palindrome fun
// function isPalindrome(string){
//     var newStr= string.split('').reverse().join('');
//     if(string===newStr){
//         console.log('it is a palindrome');
//     }
//     else{
//         console.log('it is not a palindrome');
//     }
// }
// isPalindrome("level");
// ispalindrome("levels");


                    // string alphabetic order using sort
// function order(str){
//     return str.split('').sort().join('');
// }
// console.log(order("alumatar"));


                //checking for larger number 
// x = 20;
// y = 30;
// if(x>y){
//     console.log(x+" is the larger num");
// }
// else if(y>x){
//     console.log(y+" is the larger num");
// }
// else{
//     console.lo("both r equal");
// }


            //   decremental order
// x = 0;
// y = -3;
// z = 3;
// if(x>y && x>z)
// {
//     if(y>z){
//         console.log(x+","+y+","+z);
//     }
//     else{
//         console.log(x+", "+z+", "+y);
//     }
// }
// else if(y>x && y>z){
//     if(x>z){
//         console.log(y+","+x+","+z);
//     }
//     else{
//         console.log(y+", "+z+", "+x);
//     }
// }
// else if(z>x && z>y){
//     if(x>y){
//         console.log(z+","+x+","+y);
//     }
//     else{
//         console.log(z+", "+y+", "+x);
//     }
// }


              //positi or negative num check

const prompt = require("prompt-sync")();
// function check(){
//     var value = prompt("enter a num to check : ");
//     var res = ""
//     if(value>0){
//        console.log(res = `${value} is a positive num`);
//     }
//     else if(value<0){
//         console.log(res = `${value} is a negative num`);
//     }
//     else if(value==0){
//         console.log(res = `${value} is a zero`);
//     }
//     else{
//         console.log(res = `${value} is a NaN`);
//     }
// }
// check();
 


               //generating an otp using math.random

// var n = Math.random();
// n = n*10000; // u can increase the 0's for the how many digits otp u want 
// console.log("your otp is "+Math.floor(n));


                 //prime no


// for(let i=0;i<10;i++){
//     for(let j=2;j<=i;j++){
//         if(i%j==0){
//            console.log(i+" is  not prime num");
//            break;
//         }
//         else{
//             console.log(i+" is a prime num");
//             break;
//         }
//     }
// }

           //function to check if num is prime (true or false)

// function primeNum(num){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false;
//         }
//    
//        return true
//     }
    
// }
// console.log(primeNum(5));



               //function to check num is prime


// function primeNum(num){ 
//     for(let i=2; i<num; i++){
//         if(num%i==0)
//         {
//             console.log(num+" is not a prime");   
//         }    
//     } 
        
//     console.log(num+" is a prime");
        
// }
// primeNum(61);


// function primeNum(num){
//     for(let i=1;i<num;i++)
//     {
//         for(let j=2;j<i;j++)
//         {
//             if(i%j==0)
//             {
//                 console.log(i +' is not a prime num');
//             }
            
//         }
//     }
//     console.log(`${i} is a prime num`);
    
// }
// primeNum(10);

            //   anagram string


let a = "indian";
let b = "cdaini";
if(a.length!=b.length){
    return
}
let la = a.split('').sort().join('');
let lb = b.split('').sort().join('');
if(la==lb){
    console.log("True");
}
else{
    console.log("False");
}

