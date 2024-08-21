document.getElementById("name").addEventListener("input", (event) => verifyIsEmpty());
function verifyIsEmpty(){
    let nameText = document.getElementById("name").value;

    if(nameText === ""){
        document.getElementById("errorEmpty").innerHTML = "El campo no puede estar vacío.";
        document.getElementById("errorEmpty").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }else{
        document.getElementById("errorEmpty").innerHTML = "";
        document.getElementById("submit").style.display = "block";
    }
}

document.getElementById("password").addEventListener("input", (event) => verifyPassword());
function verifyPassword(){
    let passwordText = document.getElementById("password").value;

    if(passwordText.length < 6){
        document.getElementById("errorPassword").innerHTML = "El password debe tener más de 6 caracteres.";
        document.getElementById("errorPassword").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }else{
        document.getElementById("errorPassword").innerHTML = "";
        document.getElementById("submit").style.display = "block";
    }
}

document.getElementById("email").addEventListener("input", (event) => verifyEmail());
function verifyEmail(){
    let emailText = document.getElementById("email").value;
    let mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailText.match(mailFormat)){
        document.getElementById("errorEmail").innerHTML = "Debe ingresar un email válido.";
        document.getElementById("errorEmail").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }else{
        document.getElementById("errorEmail").innerHTML = "";
        document.getElementById("submit").style.display = "block";
    }
}