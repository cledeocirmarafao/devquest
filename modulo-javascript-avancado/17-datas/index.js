// Manipulando datas; Alterando o dia. Inserindo um dia a mais.
const diaAtual = new Date()
const umDiaDepois = new Date(diaAtual)

umDiaDepois.setDate(diaAtual.getDate() + 1 )
console.log(umDiaDepois);

// Manipulando datas; Alterando o mês. Subtraindo um mês.
const mesAtual = new Date()
const umMesAtras = new Date()

umMesAtras.setMonth(umMesAtras.getMonth() - 1 )
console.log(umMesAtras);

// // Manipulando datas; Criando uma data com um objeto de opções
const dataAtual = new Date()
const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes)
console.log(dataFormatada);

// Manipulando datas; Trabalhando com a API Intl.DateTimeFormat
const novaData = new Date()
const novasOpcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-BR', novasOpcoes)
const novaDAtaFormatada = formatador.format(novaData)
console.log(novaDAtaFormatada)