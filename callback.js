// function cbPrint(msg){
//     console.log(msg);
// }
// function findEven(n,cb){
//     if(n % 2 == 0){
//         cb("Even");
//     }
// }
// function add(a,b,cb){
//     cb(a+b);
// }
// function sub(a,b,cb){
//     cb(a-b);
// }

// findEven(18,cbPrint);
// add(2,3,cbPrint);
// sub(3,2,cbPrint);





function reply(name, msg) {
    console.log("Hi "+ name);
    msg();
}
// function callback() {
//     console.log("I will call u later");
// }
// reply("Amol", callback);

reply("Amol",function(){
    console.log("I will call u later");
});