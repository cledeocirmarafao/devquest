//------------- DESESTRUTURAÇÃO DE OBJETOS -----------

let pessoa = { nome: 'Cledeocir', sobrenome: 'Marafão', idade: '29' }
// Método ' comum ' de fazer essa operação
/*
let nome = pessoa.nome
let idade = pessoa.idade

console.log(nome)
console.log(idade)
*/

//Método com desestruturação
/*
let { nome: nome, idade: idade, sobrenome: sobrenome} = pessoa

console.log(nome)
console.log(idade)
console.log(sobrenome)
*/

//Refatorando o código acima
/*
let { nome, idade, sobrenome } = pessoa

console.log(nome)
console.log(idade)
console.log(sobrenome)
*/

//Dessa forma é suficiente pro JS reconhecer e desestruturar o objeto mas, se tiver uma propriedade de nome diferente, ai deve ser assim: 
/*
let { nome: nome, idade: idade, sobrenome: sobrenomeDaPessoa} = pessoa

console.log(nome)
console.log(idade)
console.log(sobrenomeDaPessoa)
*/

// ------- DESESTRUTURAÇÃO DE ARRAYS --------

const numeros = [ 1, 2 , 3]

const [ um, dois, tres] = numeros
// Se tentarmos adicionar uma quarta propriedade na desestruturação essa propriedade rebecerá 'undefined' pois não existe dentro do array.
console.log(um);
console.log(dois)
console.log(tres)