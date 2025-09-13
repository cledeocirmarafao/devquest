//Em resumo módulos são arquivos que a gente pode exportar e depois importar em pontos específicos do nosso javascript que a gente precise usar;
// geralmente na programação a gente vai precisar escrever código que a gente vai usar em vários pontos do nosso projeto, isso se chama REUSABILIDADE, a gente vai poder usar esse mesmo trecho de código sem ter que ficar reescrevendo o mesmo código várias vezes, oque sabemos que é ruim pra dar manutenção porque por exemplo, se precisar mudar alguma coisa nesse trecho de código, teriamos que reescrever todos os pontos em que esse código foi escrito;
// Se usarmos o módulo vamos ter apenas um trecho de código aonde a gente fez essa alteração e isso é diferente se a gente for usar o módulo javascript, porque o módulo a gente vai ter escrito num lugar só e qualquer alteração que a gente fizer nesse módulo a gente vai fazer só nesse arquivo e vai ser mais fácil;


// -- criando e expotando um módulo no JavaScript

// Vamos supor que eu quero criar um módulo com operações matemáticas com funções de operações matemáticas como somar e multiplicar,por exemplo;

// -- Pra isso vamos criar um arquivo operacoes-matematicas.js e nele vamos criar essas operações;

// ---- RESPONDENDO A LINHA 6 DO ARQUIVO operacoes-matematicas.js
// no arquivo operacoes-matemayicas.js eu preciso exportar essa função somar;
// E ai é que entra a palavra chave EXPORT;
// Na função da linha 2 no arquivo operacoes-matematicas.js colocamos antes da função a palavra 'export';
// E então esse arquivo passa a ser um módulo agora;
// E então como eu tô exportando essa função eu posso em outros arquivos JavaScript importar essa função e usar ela lá;

// ----- Então aqui no index,js eu posso importar a função, como fazer isso ?
// Vamos usar outra palavra chave, o IMPORT; 

import { somar, multiplicar } from './operacoes-matematicas.js'
//geralmente omitimos o .js mas pro live server entender esse arquivo, precisamos declarar
console.log(somar(2, 3));
console.log(multiplicar( 2, 3));

// ----- IMPORTANTE -----
// Pro import funcionar eu preciso declarar na tag script no html o type="module"

// ---- E se agora eu quiser importar uma função se multplicar ? linha 8 em operacoes-matematicas.js