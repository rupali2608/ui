// const promise1 = new Promise((resolve,reject)=>{
//     const data = null;
//     if(data){
//         resolve({msg:"data received",data: data});
//     }
//     else{
//         reject({msg:"data not received",data: data});
//     }
// });
// promise1.then(({msg,data})=>{
//     console.log(msg,data);
// })
// .catch(({msg,data})=>{
//     console.log(msg,data); 
// });

// const prm1 = new Promise((resolve,reject)=>{
//     setTimeout(resolve,3000,"resolved");
//     (reject,3000,"rejected");
// });
// prm1
// .then((msg)=>{
//     console.log(msg);
// })
// .catch((msg)=>{
//     console.log(msg);
// })
// .finally(()=>{
//     console.log('this msg will always execute');
// })


const prm1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({a:12,b:10}),10000);
});
async function add(){
    const{a,b} = await prm1;
    console.log(a+b);
}
add();