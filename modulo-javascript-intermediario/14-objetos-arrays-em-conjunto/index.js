//RELEMBRANDO: Os Objetos tem uma chave e um valor; Então nesse caso a gente já tem duas propriedades com chave e valor, o 'nome' e o 'valor' dentro da variável abaixo;
// A estrutura de jogos como vai abrangir vários itens, corretamente deve se usar um Array;

/*
let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos:['Resident Evil', 'Fear', 'Call Of Duty']
}
*/


// -------- TAMBÉM PODERIA SER ASSIM ----------

/*
let jogo1 ={
    nome: 'Resident Evil'
}

let jogo2 ={
    nome: 'Fear'
}

let jogo3 ={
    nome: 'Call Of Duty'
}

let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos:[jogo1, jogo2]
}
*/


// Como eu faria pra adicionar um jogo novo dentro desse Array de jogos?

// ----- PODE SER FEITO DA SEGUINTE FORMA -----
// O PUSH precisa que eu informe o Objeto que eu quero adicionar no Array;

/*
videoGame.jogos.push(jogo3)

console.log(videoGame);
*/

// ------- TAMBÉM PODERIA PASSAR A CRIAÇÃO DIRETA DO OBJETO, SEM INSTANCIAR O OBJETO, ASSIM:

/*
let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos:[
        { nome: 'Resident Evil'},
        { nome: 'Fear'}
    ]
}

videoGame.jogos.push(jogo3)
console.log(videoGame)
*/

// VALE LEMBRAR: 
// Quando começa com 'abre&fecha CHAVES' é um objeto, quando começa com 'abre&fecha COLCHETES' é um Array;

// -------------- OBJETO DENTRO DE OUTRO OBJETO ---------------

let cliente ={
    nome: 'Cledeocir',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            { nome: 'Fear'}
        ]
    }
}

// Como vemos o nome do ultimo pedido do cliente, no exemplo acima?
//Assim:

console.log(cliente.ultimoPedido.jogos[0].nome);
