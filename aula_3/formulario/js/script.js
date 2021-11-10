var nome = document.getElementById("inputNome");
var email = document.getElementById("inputEmail");
var celular = document.getElementById("inputCelular");

function vazio() {
    if (nome.value == "") {
        alert("Nome está vazio");
    }else if(email.value == ""){
        alert("Email está vazio");
    }else if(celular.value == ""){
        alert("Celular está vazio");
    }
    
    else{
        window.location.href = "";
    }
}