var nome = document.getElementById("inputNome");


function vazio() {
    if (nome.value === "") {
        alert("Erro");
    }else{
        window.location.href = "http://www.w3schools.com";
    }
}