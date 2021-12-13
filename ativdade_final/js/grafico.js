var departamento = document.getElementById("inputDepartamento");
var quant = document.getElementById("inputQuantidade");

var livros_Dep = [];
var livros_Quant = [];



function teste(){
    alert("Livro cadastrado com sucesso!");

    //Adiciona o departamento a lista
    livros_Dep.push(departamento.value);

    quant.push(quant.valueAsNumber);
}