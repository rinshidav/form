function login(){
    var uname=document.getElementById("uname").value;
    var password=document.getElementById("pass").value;
    if(uname==""){
        alert("........!");
        document.form.uname.focus();
        return false;
    }
    if(password==""){
        alert("blank..!");
        document.form.pass.focus();
        return false;
    }
    if(password!=="123"){
        alert("incorrect password")
    }
    if(password==("123")){
        window.open("confirm.html")
        return false;
    
    }
}