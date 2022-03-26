function phonenumber()
{   
        var phoneNum=document.getElementById("NumberSignUp")
        var phoneNumHelp=document.getElementById("HelpForNumberSignUp")
        var phonenoExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if((phoneNum.value.match(phonenoExp)))
        {
            phoneNumHelp.innerText="";
            phoneNumHelp.visibility=false;
            return true;
          
            
        }
        else
        {
            phoneNumHelp.innerText="Invalid Mobile Number";
            phoneNumHelp.visibility=true;
            return false;
        }
}

function ValidateEmail()
{
    // alert(EmailID);
 var Email= document.getElementById("exampleInputEmail1");
 var EmailHelp= document.getElementById("HelpForexampleInputEmail1");



var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(Email.value.match(mailformat))
{


EmailHelp.innerText=""
EmailHelp.style.visibility=false;

return true;
}
else
{
Email.value=""
Email.focus();
EmailHelp.innerText="Invalid Email"
EmailHelp.style.visibility=true;
return false;
}
}
//validatePassword
function CheckPassword() 
{ 
  
var pass=document.getElementById("exampleInputPassword1");
var passhelp=document.getElementById("HelpForexampleInputPassword1");
var regExp=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var regExpMedium=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var regExpStrong=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{12,15}$/;


if(pass.value.match(regExp) && pass.value!="") 
{   


    passhelp.innerText="Weak"
    passhelp.title="Make Password more stronger by adding Special Characters"
    
    if(pass.value.match(regExpMedium)) {
        passhelp.innerText="Medium"
        passhelp.title="Make Password more stronger by adding atleast 12 characters"
        if(pass.value.match(regExpStrong)) {
            passhelp.innerText="Strong"
            passhelp.title=""           
        }

    }
    return true;
    
    
}
else
{ 
    passhelp.innerText="Invalid Password"
    passhelp.title="Password Should have Minimum 8 characters  at least one uppercase and one lower case letter  and must contain at least one number"
    return false;

}
} 

function confirmPass(){

    var pass=document.getElementById("exampleInputPassword1");
    var confirmPassword=document.getElementById("ConfirmInputPassword1");
    var confirmHelp=document.getElementById("HelpForConfirmInputPassword1")
    if(pass.value==confirmPassword.value){
        confirmHelp.innerText="";
        confirmHelp.style.visibility=false;
        return true }
    else{
        confirmHelp.innerText="Password doesn't match";
        confirmHelp.style.visibility=true;
        return false}
}


function formValidation()
{

   
    if(phonenumber()){
            if(ValidateEmail())
            {
                if (CheckPassword())                
                { 
                    if(confirmPass()){
                    return true; 
                    }              
                }
                else{return false}
            } else{return false}
    } else{return false}

    return false;
}