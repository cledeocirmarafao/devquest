let pessoas = [
    { nome: 'Alice', idade: 26 },
    { nome: 'Cledeocir', idade: 29 },
    { nome: 'Helena', idade: 4 },
    { nome: 'Aurora', idade: 0.8 }    
]

/*
let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome)
}
console.log(nomeDasPessoas);
*/

//Usando o map
let nomes = pessoas.map(pessoa => pessoa.nome + ' tem ' + pessoa.idade + ' anos de idade ' )
console.log(nomes);
