var email ="rakesh@gmail.com"
var password = "123"
var form = document.forms
function loginpage(){

   var useremail= document.getElementById("email").value
   var userpass= document.getElementById("password").value
   var divborder = document.getElementsByClassName("border")
   if(email!=useremail && password!=userpass)
   {
        document.body.style.backgroundImage = "linear-gradient(75deg,red,red"
        divborder[0].style.borderColor = "red"
        divborder[1].style.borderColor= "red"
        document.getElementById("result").innerHTML="email and password are wrong"
   }
   else if(email==useremail && password!=userpass)
   {
        document.body.style.backgroundImage = "linear-gradient(75deg,red,purple"
        divborder[0].style.borderColor = "royalblue"
        divborder[1].style.borderColor= "red"
        document.getElementById("result").innerHTML="passwords is wrong"
   }
   else if(email!=useremail && password==userpass)
   {
        document.body.style.backgroundImage = "linear-gradient(75deg,purple,red"
        divborder[0].style.borderColor = "red"
        divborder[1].style.borderColor= "royalblue"
        document.getElementById("result").innerHTML="email is wrong"
   }
   else{
       form[0].action="./html/projectmain.html"
       form[0].elements[2].type="submit"
   }


}