
var departamento = document.getElementById("inputDepartamento");
var quantidade = document.getElementById('inputQuantidade');

var lista = [];
var valor_departamento = [];

function addDep(){
    

    if(quantidade.value == ''){
        alert("Campo Nome em branco");
    }else{
        lista.push(departamento.value);

        valor_departamento.push(quantidade.value);
    alert("O departamento " + departamento.value + " foi cadastrado com a quantidade de " + Number(quantidade.value) );
    }

    


}


function showGraphic(){
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels:lista,
            datasets: [{
                label: '# of Votes',
                data: valor_departamento,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
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
}