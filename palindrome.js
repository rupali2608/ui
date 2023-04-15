// var str = "madam";
// var strArr = str.split('');
// var revArr = strArr.reverse();
// var newStr = revArr.join('');
// if(str==newStr){
//     console.log("it is a palindrome");
// }
// else{
//     console.log("it is not a palindrome");
// }


function isPalindrome(string){
    return(string===string.split('').reverse().join(''));
}
console.log(isPalindrome("level"));