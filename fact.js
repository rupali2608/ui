//without recursion
// var n = 5;
// var fact = 1;
// for(i=1;i<=n;i++){
//     fact=fact*i;
//     console.log(fact);
// }



//using recursion
var num = 5;
var fact = 1;
function factr(n){
   if(n>num){
    return;
   }
   fact=fact*n;
   n++;
   console.log(fact);
   factr(n);
   //sfactr(num);

}
factr(1);