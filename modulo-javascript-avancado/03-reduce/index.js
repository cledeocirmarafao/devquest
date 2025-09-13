let ordens = [
  { cliente: "Cledeocir", tipo: 'compra', quantidade: 56, ativo: 'PETR4' },
  { cliente: "Alice", tipo: 'compra', quantidade: 34, ativo: 'VALE3' },
  { cliente: "Helena", tipo: 'compra', quantidade: 12, ativo: 'ITUB4' },
  { cliente: "Aurora", tipo: 'venda', quantidade: 45, ativo: 'BBDC4' },
];

/*
let quantidadeDeOrdens = 0
for(let i = 0; i < ordens.length; i++) {
    quantidadeDeOrdens += ordens[i].quantidade
}
console.log(quantidadeDeOrdens)
*/
let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)
console.log(quantidadeDeOrdens);
