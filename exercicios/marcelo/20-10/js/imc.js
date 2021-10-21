// * Pegando os dados do HTML
var sexo = document.getElementById('sexo') ;
var altura = document.getElementById('altura');
var imc = document.getElementById('imc');

console.log("altura: " + altura);

function CalcularImc() {

    if (sexo == 'masculino') {
        var result = (72.7 * altura) - 58;
        alert(result);
    }

    else if (sexo == 'feminino') {
        var result = (62.1 * altura.valueAsnumber) - 44.7;
    } else {
        var result = "ERRO";
    }

    imc.innerHTML = result;
    
}