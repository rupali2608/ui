var famMember = [
    {
        name: "Amol",
        id: 123,
        age: 24
    },
    {
        name: "Atul",
        id: 231,
        age: 17
    }

]
for(let i=0;i<famMember.length;i++){
    if(famMember[i].age<=18){
        console.log("hey "+famMember[i].name+" you are a teen");
    }
    else{
        console.log("hey "+famMember[i].name+" you are an adult");
    }
}