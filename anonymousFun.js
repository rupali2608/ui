function findEven(n,cb){
    if(n % 2 == 0){
        cb("Even");
    }
}
function add(a,b,cb){
    cb(a+b);
}
function sub(a,b,cb){
    cb(a-b);
}

findEven(18,function(msg){
    console.log(msg);

})
add(2,3,function(msg){
    console.log(msg);
})
sub(3,2,function(msg){
    console.log(msg)
})