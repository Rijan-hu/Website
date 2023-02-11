function validname(){
    var USERNAME=document.getElementById("name").value;
    console.log(USERNAME)
    var PASSWORD=document.getElementById("pass").value;
    console.log(PASSWORD)
    if(USERNAME.trim()==""){
        alert("Username must be filled")
        return false;
    }else if(PASSWORD.trim()==""){
    alert("Password must be filled")
    return false;
    }else if(PASSWORD.length<=5){
    alert("Password must not be less than 5")
    }else{
        alert("logged in sucessfully")
    }
}
