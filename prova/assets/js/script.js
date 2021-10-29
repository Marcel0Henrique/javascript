var proteina =document.getElementById("inputProteinas");
var bebida = document.getElementById("inputBebidas");
var formaPagamento = document.getElementById("inputPagamento");
var nome = document.getElementById("inputNome");
var sobrenome = document.getElementById("inputSobrenome");


function processamento(){
    var calc = Number(proteina.value) + Number(bebida.value);
    var pagamento = document.getElementById("formaPagamento");
    var valorTotal = document.getElementById("valorTotal");
    
    valorTotal.innerHTML =  "R$ " + calc;
    pagamento.innerText =  formaPagamento.value;
    
}