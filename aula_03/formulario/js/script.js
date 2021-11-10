var nome = document.getElementById("inputNome");
var email = document.getElementById("inputEmail");
var celular = document.getElementById("inputCelular");
var nasc = document.getElementById("inputNascimento");
var sobre = document.getElementById("inputSobre");
var linkedin = document.getElementById("inputLinkedin");
var github = document.getElementById("inputGithub");
var salario = document.getElementById("inputsalario");

function vazio() {
    if (nome.value == "") {
        alert("Nome está vazio");
    }else if(email.value == ""){
        alert("Email está vazio");
    }else if(celular.value == ""){
        alert("Celular está vazio");
    }else if(nasc.value == ""){
        alert("Data de nascimento está vazio");
    }else if(sobre.value == ""){
        alert("Sobre você está vazio");
    }else if(linkedin.value == ""){
        alert("Linkedin está vazio");
    }else if(github.value == ""){
        alert("GitHub está vazio");
    }else if(salario.value == ""){
        alert("Pretenção salarial está vazio");
    }
    
    else{
        window.location.href = "";
    }
}