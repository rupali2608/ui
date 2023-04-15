function validateTextbox(){
var box1 = document.getElementById("name");
var box2 = document.getElementById("password");
if(box1.value==""){
    alert("The fields cannot be blank");
    box1.focus();
    box1.style.border="solid 3px red"
    return false;
}
    
else if(box2.value=="")
{
    alert("The fields cannot be blank");
    box2.focus();
    box2.style.border="solid 3px red"
    return false;
   
}
}

