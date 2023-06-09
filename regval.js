function validate(){
    var fname=document.getElementById("fname").value;
    var laname=document.getElementById("lname").value;
    var mail=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    var cpassword=document.getElementById("cpass").value;
    var adrs=document.getElementById("add").value;
    if(fname ==""){
        alert('please enter name');
        document.myform.nm.focus();
        return false;

    }
    if(laname==""){
        alert('please enter last name');
        document.myform.lnm.focus();
        return false;
    }
    if(mail==""){
        alert('please enter email');
        document.myform.mail.focus();
        return false;
    }
    if(password==""){
        alert('enter password');
        document.myform.pswd.focus();
        return false;
    }
    if(cpassword==""){
        alert('please enter correct password');
        document.myform.cpswd.focus();
        return false;
    }
    if(adrs==""){
        alert('please enter address');
        document.myform.adrs.focus();
        return false;
    }
}