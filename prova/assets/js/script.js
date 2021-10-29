var proteina =document.getElementById("inputProteinas");
var bebida = document.getElementById("inputBebidas");
var formaPagamento = document.getElementById("inputPagamento");
var nome = document.getElementById("inputNome");
var sobrenome = document.getElementById("inputSobrenome");
var rua = document.getElementById("inputRua");
var numero = document.getElementById("inputNumero");


function processamento(){
    var calc = Number(proteina.value) + Number(bebida.value);
    var pagamento = document.getElementById("formaPagamento");
    var valorTotal = document.getElementById("valorTotal");
    var infoclt = document.getElementById("infoCliente");


    valorTotal.innerHTML =  "R$ " + calc;
    pagamento.innerHTML =  formaPagamento.value;
    infoclt.innerHTML = nome.value + " " + sobrenome.value + ", " + "Rua " + rua.value + ", " + numero.value;



    
}