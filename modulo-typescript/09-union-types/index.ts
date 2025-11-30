//Union Types, nos dá o poder de unir dois ou mais tipos no TypeScript
// Digamos que eu estou criando uma loja online e quero criar uma função que apresente o ID, um número de identificação do meu cliente:
/*
function printClientId(id: number) {
    console.log(`O id do cliente é: ${id}`);   
}
printClientId(100)
*/
//supondo que meu sistema mudou e agora eu posso passar também uma string:
// printClientId("100")

//O TS vai acusar um erro, porque definimos explicitamente que esse ID deve retornar como um number.
//Então como utilizar o Union:
function printClientId(id: number | string) {
    console.log(`O id do cliente é: ${id}`);   
}
printClientId(100)
printClientId("100")
//Podemos ver que o TS já não está acusando nenhum erro.