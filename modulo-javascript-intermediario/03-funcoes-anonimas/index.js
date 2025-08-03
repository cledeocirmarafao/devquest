//As funções anônimas são funções que a gente não nomeia, não damos um nome.
// A dúvida mais comum é: 
//Porque a gente vai criar uma função que não tem um nome? como vamos invoca-lá?

// A gente pode usar a função anônima pra atribuir uma função a uma variável por exemplo; E retornar algo no final dessa função pra essa variável; E depois usar essa variável que vai ter esse código retornado, o retorno da função dentro do nosso código, em algum outro fluxo;
// Então a gente vai ter aquele valor retornado da função  armazenado dentro da variável pra gente poder usar em outros lugares por exemplo;
// ISSO É O EXEMPLO DE UMA função anônima E OQUE ELA PODE FAZER;

// Vamos ver na prática;





// function somar (numero1, numero2){
//     return numero1 + numero2
// }

// let resultadoDaSoma = somar(12, 5)
// console.log(resultadoDaSoma);


let resultadoDaSoma = function(numero1, numero2){
    return numero1 + numero2
}

console.log(resultadoDaSoma( 12, 5));
