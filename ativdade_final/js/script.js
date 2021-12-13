var departamento = document.getElementById("inputDepartamento");
var quant = document.getElementById("inputQuantidade");

var livros_Dep = [];
var livros_Quant = [];



function addDep() {

  if (livros_Dep.includes(departamento.value)) {
    Swal.fire(
      'Cadastrado!',
      'Departamento: ' + departamento.value + ' | ' + 'Quantidade: ' + quant.value,
      'success'
    )
  }


  //alert("Livro cadastrado com sucesso!");
  Swal.fire(
    'Cadastrado!',
    'Departamento: ' + departamento.value + ' | ' + 'Quantidade: ' + quant.value,
    'success'
  )
  //Adiciona o departamento a lista
  livros_Dep.push(departamento.value);

  livros_Quant.push(quant.valueAsNumber);
}

function showGrap() {
  if (livros_Dep.length == 4) {

  }
}