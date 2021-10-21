var nome = document.getElementById('nome').value;
var idade = document.getElementById('idade').valueAsNumber;
var user  = document.getElementById('seuNome');
var age = document.getElementById('suaIdade');

function testeNome() {
    user.innerHTML = nome;

    idade = idade + 2;
    age.innerHTML = idade;
}