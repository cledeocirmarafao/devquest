let pessoas = [
    { nome: 'Alice', idade: 26 },
    { nome: 'Cledeocir', idade: 29 },
    { nome: 'Helena', idade: 4 },
    { nome: 'Aurora', idade: 4 }    
]

//método sem o filter
/*let criancas = []
for (let i = .0; i < pessoas.length; i++) {
    if (pessoas[i].idade === 4) {
        criancas.push(pessoas[i])
    }
}
console.log(criancas)
*/

//método com o filter
let criancasFilter = pessoas.filter((pessoa) => pessoa.idade === 4)


console.log(criancasFilter)