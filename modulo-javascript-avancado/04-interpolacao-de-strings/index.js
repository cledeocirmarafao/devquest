//Método mais antigo, contatenando.
/*
const imprimirInformacoes = (primeiroNome, ultimoNome, idade) =>{
    return "Primeiro Nome: " + primeiroNome + ", Último Nome: " + ultimoNome + ", Idade: " + idade
}
console.log(imprimirInformacoes("Cledeocir", "Marafão", 29));
*/

//Com interpolação de string

const imprimirInformacoes = (primeiroNome, ultimoNome, idade) => {
    return ` Primeiro Nome: ${primeiroNome}, Último Nome: ${ultimoNome}, Idade: ${idade}`
}
// console.log(imprimirInformacoes("Cledeocir", "Marafão", 29))

//Também podemos imprimir a função dentro do console, assim; E contatenar também com a vírgula
console.log(`${imprimirInformacoes("Cledeocir", "Marafão", 29)}, ele é um Desenvolvedor Júnior`)

//Imprimir uma função
console.log(`Soma ${10 + 20}`);
