var departamento = document.getElementById("inputDepartamento");
var quant = document.getElementById("inputQuantidade");
var grafico = document.getElementById("grafico");



var livros_Dep = [];
var livros_Quant = [];



function addDep() {

  if (livros_Dep.includes(departamento.value)) {

    Swal.fire(
      'Atenção',
      'Departamento ' + departamento.value + " já está cadastrado.",
      'warning'
    )
  } else {
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

}

function showGrap() {

  if (livros_Dep.length == 4) {

    grafico.innerHTML = "Gráfico";
    ocultar = true;
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: livros_Dep,
        datasets: [{
          label: livros_Dep,
          data: livros_Quant,
          backgroundColor: [
            'rgba(222, 41, 24,0.8)',
            'rgba(69, 98, 222,0.8)',
            'rgba(78, 145, 16,0.8)',
            'rgba(255, 242, 0,0.8)'

          ],
          borderColor: [
            'rgb(0, 0, 0)',

          ],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  } else {
    Swal.fire(
      'Atenção',
      'Falta informar ' + (4 - livros_Dep.length) + ' departamentos',
      'warning'
    )
  }


}