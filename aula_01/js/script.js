var idade;
var nomePersonagem = "Gandalf";
var classe = "Mago";

var nv = 100;
var npc = "Seu madruga";

var soma = 5 + 5 ;
console.log(soma);
 
var text1 = "Bruno";
var text2 = " ";
var text3 = "Cesar";

var nome = text1 + text2 + text3;

idade = 22;

if (idade<18) {
    alert("*MENOR DE IDADE*");
}else{
    alert("*MAIOR DE IDADE*");
}

usuario = prompt("Digite seu nome: ");

alert(usuario);

Swal.fire('Any fool can use a computer');

Swal.fire({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '3em',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });


