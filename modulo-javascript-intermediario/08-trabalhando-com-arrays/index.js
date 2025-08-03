//let frutas = ['banana', 'maça', 'laranja', 'pêra']
//let frutasTamanho = frutas.length //aqui estamos acessando uma propriedade do Array;
// console.log(frutasTamanho);


// for(let i = 0; i < frutas.length; i++){
// console.log('Fruta: ' + frutas[i]);

// }

// ----------- FOR EACH --------------

/*
frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + item);
    console.log('Fruta: ' + [indice]);
    console.log('Fruta: ' + array);
    
})
*/

// ---------- Métodos do Array -----------

// ----------------- PUSH ------------

// Digamos que eu quero adicionar mais uma fruta a minha variável frutas;

/*
frutas.push('manga')

console.log(frutas);
*/

// O PUSH vai sempre adicionar elementos no final do array;

//---------------- POP ---------------

// O POP vai basicamente retirar um elemento do Array; O último elemento do Array;

/*
frutas.pop()

console.log(frutas);
*/

// ------------- SHIFT ---------------

// O SHIFT vai remover o primeiro elemento do Array; 

/*
frutas.shift()
console.log(frutas);
*/

// ----------------- UNSHIFT ------------

// Com o UNSHIFT a gente consegue adicionar um elemento no começo do Array;

/*
frutas.unshift('manga')
console.log(frutas);
*/

// Se tentarmos dar um console.log antes do unshift o console irá mostrar o Array original, se dermos o console.log depois do unshift vamos ter o  Array original com a 'manga' na frente.
// Isso funciona pra todos os outros métodos demonstrados nessa aula;

// -------------- INDEX OF --------------

let frutas = ['banana', 'maça', 'laranja', 'pêra']

let posicaoLaranja = frutas.indexOf('laranja')

console.log(posicaoLaranja)