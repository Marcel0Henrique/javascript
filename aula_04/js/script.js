var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");



function gerar() {
    
    const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Dado 1', 'Dado 2'],
        datasets: [{
            label: 'Grafico',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgb(255, 205, 86)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                
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