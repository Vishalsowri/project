
function validationForm()
{
    
    var username= document.getElementById("txtUserName").value;
    var password= document.getElementById("txtPassword").value;
    let checkLowercase=/[a-z]/;
    let checkUppercase = /[A-Z]/;
    let checkSpecial = /[!@#$%^&*]/;
    let checkNumber = /[0-9]/;
    if(username =="")
    {
        var edDivUN=document.getElementById("errorDivUsername");
        //edDivUN.removeClass("hiddenElement");
        edDivUN.style.display="block";
        document.getElementById("txtUserName").style.border="5px white";
       
    }
    else
    {
        var edDivUN=document.getElementById("errorDivUsername");
        edDivUN.style.display="none";
        document.getElementById("txtUserName").style.border="none";
        
    }
    if(password =="")
    {
        var edDivUN=document.getElementById("errorDivPassword");
        //edDivUN.removeClass("hiddenElement");
        edDivUN.style.display="block";
        document.getElementById("txtPassword").style.border="5px white";
      
    }
    else
    {
        var edDivUN=document.getElementById("errorDivPassword");
        //edDivUN.removeClass("hiddenElement");
        edDivUN.style.display="none";
        document.getElementById("txtPassword").style.border="none";
    }

}
