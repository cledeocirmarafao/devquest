// Como fazer uma requisição GET pra uma API usando o FETCH?
// O Fetch no JavaScript é um método que vai servir pra trabalgar com APIs e esse fetch vai retornar uma promise e no resolve dessa promise vai ter o objeto do retorno dessa API
//O FETCH vai ser o responsavél por buscar os dados dessa API e nós vamos armazenar esses dados numa variável também (linha 6)
async function criarBaralhoEmbaralhado() {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const resposta = await fetch(url)
    //const json = await resposta.json()
    // ao invés de criar um objeto.json (linha 7), eu posso já direto retornar esse resposta.json que vai retornar aquele objeto que está na (linha 9)
    return await resposta.json()
}
//criarBaralhoEmbaralhado()

// Está pronta a nossa primeira função

async function tirarUmaCarta(deck_id) {
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)

    return await resposta.json()
}

async function tirarUmaCartaAleatoriaDoBaralho() {
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta
    
}

function ClickRetirarCarta() {
    const botao = document.getElementById('botao')
    
    botao.addEventListener('click', () => {
        tirarUmaCartaAleatoriaDoBaralho()
        
    }) 
    
}
ClickRetirarCarta()
tirarUmaCartaAleatoriaDoBaralho()