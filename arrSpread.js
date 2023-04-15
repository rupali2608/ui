// function arrspread(arr){
// // var arr = [1,2,3,[4,[5,6],7],8,[9,8]];
// // console.log(arr[3][1][0])
// // const print =[a,b,c,d,e,f,g]=arr;
// var newArr = [];
// var newArr2 = [];
// // var newArr = [];
// // var newArr2 = [];
// // newArr.push(...arr);
// // newArr2.push([...arr]);
// // console.log(newArr);
// // var newArr = arr.join('').split('');rrrr
// // newA = [...newArr]
// for(let i=0;i<arr.length;i++){
// //  var arr2= Array.isArray(arr[i]);
//     if(Array.isArray(arr[i])==true){
//         for (let j=0;j<arr[i].length;j++){
//             if(Array.isArray(arr[i][j])==true){
//                 for(let k=0;k<arr[i][j].length;k++){
//                   newArr.push(arr[i][j][k]);
                   
//                 }  

//             }
                
//             else{
//                 newArr.push(arr[i][j]);
                   
//             }
            
//         }     
//         }
//     else{
//         newArr2.push(arr[i]);
//     }
// }
// //console.log(newArr);
// //console.log(newArr2);

// var finalArray=[...newArr2,...newArr,];
// // console.log(finalArray);
// return finalArray;
// }

// // arrspread();
// console.log(arrspread([1,2,3,[4,5,6],7,[8,9]]));

const arr = [1,2,3,[4,5,[6,7]],8,9];
var newArr = [];
var newArr2 = [];
arr.forEach((value) => {
    if(Array.isArray(value)==true){
        newArr.push(...value);
        newArr.forEach((value)=>{
            if(Array.isArray(value)==true){
                // console.log(...value)
                newArr2.push(...value);
            }
            else{
                newArr2.push(value);
            }
        })
    }   
    else{
        newArr2.push(value);
    }
})
console.log(newArr2);
