var sexo = document.getElementById('sexo').value;
sexo = sexo.toUpperCase();

var altura = document.getElementById('altura').valueAsNumber;
var result = document.getElementById('imcResultado');

function calcularImc() {
    if (sexo == "MASCULINO") {
        var imc = (72.7 * altura) - 58;
    }
    else if (sexo == "FEMININO"){
        var imc = (62.1 * altura) - 44.7;
    }else{
        var imc = "ERRO";
    }

    result.innerHTML = imc;

}
