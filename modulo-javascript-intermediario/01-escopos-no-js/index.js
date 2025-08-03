// const mensagem = 'olá'

// console.log(mensagem);

//Se o código abaixo ficar do jeito que está, irá apresentar uma mensagem de erro; Uncaught ReferenceError ReferenceError: mensagem is not defined.
//Porque isso acontece? o bloco de código if, cria um escopo para a variável 'mensagem'. Então a variável mensagem pode ser acessada somente dentro desse escopo;
// A acessibilidade das variáveis é limitada pelo escopo aonde elas são criadas. Então se eu criar uma variável dentro de um bloco, ela vai ficar limitada aquele bloco.
// Podemos trabalhar livremente com a variável dentro do escopo. Se dermos um console.log dentro do bloco, vai funcionar normalmente, porém fora do escopo, a variável fica inacessível.

// if (true) {
//   const mensagem = "Olá";
// }

// console.log(mensagem);

//------------ ESCOPOS NO JAVASCRIPT --------------

//--------------- Escopo de Bloco -----------------

//Escopo de Bloco: Um bloco de código no JS define um escopo pra variavéis criadas com CONST e LET;
//COMO O EXEMPLO DO if ACIMA;
//Os blocos de códigos da instruções IF, WHILE, FOR também criam um escopo local.

// ----------- Escopo de Bloco Autônomo -----------

//No JS a gente consegue definir blocos de código autônomos escrevendo dessa forma a seguir;

// {
//   const mensagem = "Olá";
//   console.log(mensagem);
// }

// console.log(mensagem);


//Eles também demilitam o escopo

//No escopo Autônomo se trabalharmos com CONST e LET, tudo bem, vai funcionar. Porém se tentarmos com VAR funciona diferente. Exemplo com VAR:


// {
//   var mensagem = "Olá";
//   console.log(mensagem);
// }

// console.log(mensagem);

// Com o VAR o escopo autônomo se torna acessível tanto dentro quanto fora do escopo; E SE USARMOS O if TAMBÉM.

//---- RESUMINDO: Os blocos de escopo NÃO criam escopo pra variáveis declaradas com VAR mas, o corpo de uma FUNCÃO(function) sim, vai criar um escopo pra variáveis declaradas com VAR

//---------- ESCOPO DE FUNÇÃO(function) -----------

// Uma função JS define um escopo pra variáveis criadas com LET, CONST e VAR. Exemplo:

// function falar() {
//     var mensagem = 'Olá Mundo'
//     console.log(mensagem);
// }

// falar()
// console.log(mensagem);

//Então como foi citado no bloco autônomo no caso da FUNÇÃO(function) a variável VAR acaba também sendo delimitada pelo escopo aonde ela foi criada.

// Se usarmos LET ou CONST, o resultado será o mesmo. Elas vão estar sempre delimitadas pelo escopo aonde foram criadas. Sempre serão dependentes do escopo para serem chamados, imprimidos, usados em geral...
// Se tivemos uma função dentro de uma função, também vai acontecer isso. Também ficará presa ao escopo. Exemplo a seguir:

// function falar() {
//     const mensagem = 'Olá Mundo'
//     console.log(mensagem);
//     function falarOutraCoisa(){

//     }

//     falarOutraCoisa()
//     console.log(falarOutraCoisa)
// }

// falar()
// console.log(mensagem);
// console.log(falarOutraCoisa);

// Se eu der o console.log fora do escopo da função ela não vai funcionar. Então quando eu crio uma função dentro de outra função ela vai ficar também somente acessível dentro do escopo aonde ela foi criada. Fora do escopo ela não vai ficar acessível como uma variável declarada com VAR, LET ou CONST. 

//---------------- Escopo Global ------------------

// O escopo Global é o escopo mais externo de todos. Ele vai ser acessível apartir de qualquer outro escopo, tanto escopo local quanto de função e etc... 
// No escopo do nosso nnavegador, por exemplo o chrome, o escopo carregado pela TAG SCRIPT vai ser um escopo global.

// Script criado no html;
console.log(url);
// Podemos observar que o navegador está imprimindo a variável mesmo sem ela nunca ter sido declarada aqui dentro do JavaScript. Mas ela foi declarada lá no nosso html. Assim funciona uma variável de escopo Global.

// Se eu definir o seguinte:

let numero = 123

// Essa variável é acessível de qualquer lugar, porque ela não está dentro de nenhum escopo. Porém acessível de qualquer lugar dentro desse index.js especificamente.

//----- IMPORTANTE:

// Se eu tentar usar o arquivo index.js antes do script que declara a variável não vai funcionar..

//------------------- CONCLUSÃO -------------------

//O Escopo é uma política que gerencia a disponibilidade das variáveis no JS. Uma variável criada dentro de um escopo será acessível apenas aquele escopo mas inacessível fora do escopo.