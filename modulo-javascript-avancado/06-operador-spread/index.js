const pessoas = [ "Cledeocir", "Alice", "Helena", "Aurora"]
// console.log(pessoas) mostra um array;
//Operador Spread no console.log
// console.log(...pessoas);

//Método antigo para contatenar dois arrays
let pessoas1 = ["Cledeocir", "Alice", "Helena", "Aurora"]
let pessoas2 = ["Adriana", "Isabelly"]
//Abaixo é o método antigo de contatenar dois arrays
//pessoas1 = pessoas1.concat(pessoas2) //Se tivesse mais arrays seria => pessoas1 = pessoas1.concat(pessoas2).concat(pessoas3) e assim por diante
// console.log(pessoas1);

// --- Método com Spread
pessoas1 = [...pessoas1, ... pessoas2] // Mesma regra do método antigo, caso tivesse mais arrays
//console.log(pessoas1);

//---------- Método pra Clonar um Objeto com o Spread
const pessoa3 ={ nome: 'Cledeocir', Idade: 29 } 

const objetoClonado = {...pessoa3 }
console.log(objetoClonado);
console.log(pessoa3);
