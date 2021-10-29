var nome = document.getElementById("nome").value;
var lista = nome.slice(",");


function teste() {
    var info = document.getElementById("info");
    var calc = Number( lista[0] + lista[1] ) + 6;
    info.innerHTML = calc;
}