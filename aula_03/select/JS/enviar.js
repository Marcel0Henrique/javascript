var opcao = document.getElementById("opcao");
var opcao2 = document.getElementById("opcao2");
var pagamento = document.getElementById("pagamento");


function enviar() {
    var mostrar = document.getElementById("mostrar");
    var calc = Number(opcao.value) + 30;
    mostrar.innerHTML = `Produto escolhido:  ${opcao2.value} | ${calc} | ${pagamento.value}`;
}