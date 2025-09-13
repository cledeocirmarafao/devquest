// Primero a função de somar
/*export*/ function somar(numeroUm, numeroDois) {
   return numeroUm + numeroDois
}

// Beleza agora temos a função somar, mas e se agora eu quiser chamar essa função fora desse arquivo 'operacoes-matematicas' tipo dentro do arquivo index.js?

function multiplicar(numeroUm, numeroDois) {
    return numeroUm * numeroDois
}

export { somar, multiplicar }
// Pra mim conseguir exportar mais de uma função eu preciso retirar o export que estava na frente da fyunção da linha 2, passar essa palavra chave para o fim do arquivo, abrir e fechar chaves e escrever o nome das funções e IMPORTANTE, ir no arquivo index.js e definir dentro do import as duas funções