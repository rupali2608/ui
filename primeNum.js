// function primeNum(num){

//     let flag=0;
//     if (num==1){
//         console.log(num +' is not a prime or composite num');
//     }
//     else if(num>1){
//         for(let i=2;i<num;i++){
//             if (num%i==0){
//                 flag=1;
//                 break;
//             }
//         }
//         if (flag==1){
//             console.log(num +' is not a prime num');
               
//         }
//         else{
//             console.log(num +' is  a prime  num');
//         }
//     }
//     else
//     {
//        console.log(num +' is not a prime num');

//     }
// }  
// primeNum(7);      


let num = 1;
do{
    if(num%2==0)
    {
        console.log(num + " is not a prime number");

    }
    else
    {
        console.log(num+ " is a prime number");

    }
    num++;
}
while (num<=10);

