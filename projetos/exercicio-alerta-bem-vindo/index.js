//quando formos criar um alert na tela, evitar usar var ou let, de preferência usar o const porque o prompt não vai ser alterado

const nome = prompt('Digite seu nome')

alert('Bem Vindo, ' + nome + ' !')

console.log(nome);
