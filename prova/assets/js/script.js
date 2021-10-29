var proteina =document.getElementById("inputProteinas");
var bebida = document.getElementById("inputBebidas");
var formaPagamento = document.getElementById("inputPagamento");
var nome = document.getElementById("inputNome");
var sobrenome = document.getElementById("inputSobrenome");
var rua = document.getElementById("inputRua");
var numero = document.getElementById("inputNumero");


function processamento(){

    switch (proteina.value) {
        case "1":
            var prot = 15;
            var pedidoProteina = "Carne de Sol";
            break;

            case "2":
            var prot = 13;
            var pedidoProteina = "Calabresa";
            break;

            case "3":
            var prot = 14;
            var pedidoProteina = "Figado acebolado";
            break;

            case "4":
            var prot = 14;
            var pedidoProteina = "Bife acebolado";
            break;

            case "4":
            var prot = 14;
            var pedidoProteina = "Panqueca de Carne";
            break;
    
        default:
            break;
    }
        
    switch (bebida.value) {
        case "1":
            var beb = 6;
            break;
        case "2":
            var beb = 6;
            break;
    
        case "3":
            var beb = 6;
            break;
    
        default:
            break;
    }


    var calc = prot + Number(bebida.value);
    var pagamento = document.getElementById("formaPagamento");
    var valorTotal = document.getElementById("valorTotal");
    var infoclt = document.getElementById("infoCliente");
    var pedido = document.getElementById("pedido");

    valorTotal.innerHTML =  "R$ " + calc;
    pagamento.innerHTML =  formaPagamento.value;

    infoclt.innerHTML = nome.value + " " + sobrenome.value + ", " + "Rua " + rua.value + ", " + numero.value;



    
}