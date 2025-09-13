/* Aspromisses vão ter 4 estados
    Pendente: Foi criada mais ainda não foi executadada;
    Realizada === Resolve: Que é quando ela teve sucesso na execução;
    Recusada === Reject: Que é quando teve alguma falha na execução;
    Estabelecida: Que é quando ela foi realizada, ou recusada;
*/
/*
    Pendente é o estado inicial de toda promise e a gente que vai definir se ela foi realizada ou recusada.
*/ 

// Criação da promise

/*
new Promise((resolve, reject) => {
    
})
*/

// A promise é uma classe JavaScript, por isso ela é descrita com a primeira letra maiúscula e ela recebe uma função como argumento. Essa função vai ser realizada assincronamente e essa função assíncrona funciona internamente, dentro da promise.
// Os parâmetros recebidos dentro da função (resolve, reject) na verdade são funções, então posteriormente poderão ser chamados dentro do corpo da promise.
/*
new Promise((resolve, reject) => {
    resolve('exemplo')
})
*/

// O RESOLVE  a gente chama pra mudar o status dessa função como realizada, quando está tudo ok.
// O REJECT a gente chama pra mudar o status pra recusada, quando tiver algum problema ou quando a gente quiser mudar o fluxo dela pra rejeitado por exemplo, pra fazer alguma outra coisa.
    
// -- CRIAR UMA FUNÇÃO QUE RETORNA UMA PROMISSE
// Pra retornar, usar o return se não, não retorna nada.

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
   return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
        console.log('começando o processo de ferver água');
        resolve()
    } else {
        console.log('é necessário ligar a chaleira elétrica');
        
        reject()
    }
})
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
// se eu mudar o status da variável fogaoEstaLigado para false, irá gerar um erro, esse erro será tratado na aula de tratamento de erros.
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café');


// Dentro do resolve ou do reject eu poderia também passar um parâmetro, e depois eu pegaria esse parâmetro quando eu chamar a função ferverAgua    