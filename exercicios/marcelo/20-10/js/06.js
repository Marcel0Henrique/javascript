var peso = document.getElementById('peso').valueAsNumber;
var altura = document.getElementById('altura').valueAsNumber;
var imc = document.getElementById('imc');

function calcularImc() {
    var calc = peso / (altura * altura);

    if (calc < 18.5) {
        var result = "Abaixo do peso";
    } else if (calc >= 18.5 && calc < 25) {
        var result = "Peso normal";
    }else if (calc >= 25 && calc < 30) {
        var result = "Acima do peso";
    }else{
        var result = "Obeso";
    }

    imc.innerHTML = "Faixa de classifição: " + result;
}
