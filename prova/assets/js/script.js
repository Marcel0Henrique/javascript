var proteina =document.getElementById("inputProteinas");
var bebida = document.getElementById("inputBebidas");
var formaPagamento = document.getElementById("inputPagamento");


function processamento(){
    var calc = Number(proteina.value) + Number(bebida.value);
    var pagamento = document.getElementById("formaPagamento");
    var valorTotal = document.getElementById("valorTotal");
    
    valorTotal.innerHTML =  "R$ " + calc;
    pagamento.innerText =  Text(formaPagamento.value);
    
}