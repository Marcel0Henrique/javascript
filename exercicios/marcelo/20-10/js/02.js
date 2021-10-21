// pegando as informações do HTML
var nome = document.getElementById('nome').value;
var turma =  document.getElementById('turma').value;
var n1 = document.getElementById('n1').valueAsNumber;
var n2 = document.getElementById('n2').valueAsNumber;
var media = document.getElementById('media');


function calcularMedia() {
    var nota = (n1 + n2) / 2;
    
    if (nota >= 6) {
        var result = "APROVADO";
    }else{
        var result = "REPROVADO";
    }

    media.innerHTML = result;
}