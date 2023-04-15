function operations(){
    var a = parseInt(document.getElementById("first").value);
    var b = parseInt(document.getElementById("second").value);
    var ops = document.getElementById("op").value;
    var temp = document.getElementById("resPara");
        


   if(ops=='+')
   {
    document.getElementById("resPara").value = a+b;
   }
   else if(ops=='-')
   {
    document.getElementById("resPara").value = a-b;
   }
   else if(ops=='*')
   {
    document.getElementById("resPara").value = a*b;
   }
   else if(ops=='/')
   {
    document.getElementById("resPara").value = a/b;
   }
   else{
    document.getElementById("resPara").value = "please enter valid operator";
   }
}