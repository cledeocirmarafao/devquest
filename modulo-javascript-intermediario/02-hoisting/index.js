//---- OQUE É O HOISTING? ----

// O interpretador do JS faz várias operações nos bastidores e uma delas é o Hoisting que no português seria algo como içamento

// A melhor maneira de pensar no compotamento das variáveis no JS é separar isso em duas partes.Uma parte é DECLARAÇÃO da variável e a outra parte é a INICIALIZAÇÃO ou ATRIBUIÇÃO dessa variável.

var pais //declaração 
pais = 'Brasil' //atribuição

//podemos fazer como no exemplo acima e também como no exemplo abaixo;

var pais = 'Brasil'

// Apesar de parecer tudo feito em uma só linha, na prática o mecanismo do JS trata isso como duas instruções separadas, como no primeiro exemplo.