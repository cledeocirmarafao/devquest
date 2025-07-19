/*----- CONDICIONAIS -----
--- if --- else --- else if ---
*/

let nomeFilme  "Van Helsing";

if (nomeFilme === "Van Helsing") {
  console.log("É o filme do Van Helsing");
} else {
  console.log("É outro filme");
}

// let nomeFilme = "Van ";

// if (nomeFilme === "Van Helsing") {
//   console.log("É o filme do Van Helsing");
// } else if (nomeFilme == "Van Helsing") {
//   console.log("Não é o filme do Van Helsing");
// }

//----- OPERADOR TERNÁRIO -----

// true ? console.log("condição verdadeira") : console.log("condição falsa");

nomeFilme === "Van Helsing"
  ? console.log("É o filme do Van Helsing")
  : console.log("É outro Filme");

// ----- CONDICIONAIS - SWITCH -----

/*
switch(parametro){
case valor1:
    <bloco de declaração>
    break
    case valor2:
        bloco de declaração>
        }
        break
*/

// let nomeFilme = 'O Contador'

// switch(nomeFilme){
//     case 'O Contador':
//         console.log('É o Filme O Contador')
//         break
//         case 'Contador':
//             console.log('Não é o Filme  O Contador')
//             break
//o default é pra quando ele não encontrar o filme
//             default:
//                 console.log('É outro filme')
// }

//podemos ter vários cases
//o switch tem um particularidade que se chama multicaso, exemplificada abaixo;

let avaliacao = 5;

switch (avaliacao) {
  case 1:
  case 2:
    console.log("Filme ruim");
    break;
  case 3:
  case 4:
    console.log("Filme mediano");
    break
  case 5:
    console.log("Filme Bom");
    break
  default:
    console.log("Nota inválida");
    break;
}
