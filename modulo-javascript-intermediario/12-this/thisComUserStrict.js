// THIS = ISSO
// Mas isso oque? Esse é o primeiro ponto importante, o THIS geralmente vai estar dentro de um contexto ou de um escopo; por exemplo:
// No contexto de um quarto, se eu apontar pra minha cama e falar 'isso' fica claro que a cama nesse contexto do quarto é o 'isso'.

// O THIS funciona com escopo, global ou local e ele pode existir dentro do escopo local ou global.
// No caso quando a gente começa criar nosso código estamos dentro de um escopo global, por exemplo:

"use strict";
//console.log(this);
//console.log(window);
// console.log(window === this);

/*
this.name = 'marafa'

function saudar() {
    console.log('this no contexto da função', this);  
    console.log('Olá ' + this.name);
    
}

saudar()
*/

// Da forma representada acima podemos ver que o this.name está fora do escopo aonde o console.log foi criado, no entanto ainda assim ele está buscando o .name, com isso podemos afirmar então que o o escopo global está vazando para dentro do escopo local, e pode ser que não seja isso que queremos, então como resolver?

//Na primeira linha do nosso arquivo deve ficar o: 'use strict'

// Com isso, uma mensagem de erro irá aparecer, porque?
// Antes ele estava printando o this do escopo global, com a definição do 'use strict' ele não permite mais que o contexto global vaze pra dentro do meu escopo local.

// Isso ocasiona algumas coisas:
// O meu THIS fica UNDEFINED agora dentro do escopo da função, porque o THIS do escopo da minha função não é a mesma coisa do de fora(global) e quando o console.log('Olá ' + this.name) não consigo porque o .name não funciona, porque o THIS agora está UNDEFINED.

// Então o 'use strict' é importante pra evitar vazamento de escopo um pra dentro do outro e também proibe algumas sintaxe do JS.
// É interessante usar ele se a gente ver que tem necessidade quando estamos fazendo um projeto e começamos a ter esse tipo de problema com vazamentos.

//---- O THIS TAMBÉM PODE EXISTIR DENTRO DE MÉTODOS;

/*
let usuario = {
    nome: 'cledeocir',
    saudar: function(){
        console.log('this no contexto do método', this);

        console.log('this.name no contexto do método', this.name)   
    }
}

usuario.saudar()
*/

//-- OUTRA COISA QUE PODE ACONTECER QUANDO ESTAMOS UTILIZANDO O THIS:

/*
let comida = {
    nome: 'Brócolis',
    temperatura: 0,
}

comida.cozinhar = function(comidaParaCozinhar, temperaturaDeCozimento){
    comidaParaCozinhar.temperatura = temperaturaDeCozimento;
}

console.log(comida);

comida.cozinhar(comida, 100)
console.log(comida);
*/

// O método acima é uma representação de como poderíamos chamar a 'comida'
// No método abaixo faremos o mesmo, utilizando o THIS; Lembrando que quando utilizamos o THIS dentro do escopo de um Objeto ele se torna aquele Objeto;

let comida = {
  nome: "Brócolis",
  temperatura: 0,
};

comida.cozinhar = function (temperaturaDeCozimento) {
  console.log("this no contexto do Objeto comida", this);

  this.temperatura = temperaturaDeCozimento;
};

console.log(comida);

comida.cozinhar(100);
console.log(comida);


// O código acima acima também pode ser criado dentro do escopo do Objeto, com uma pequena mudança de sintaxe

/*
let comida = {
  nome: "Brócolis",
  temperatura: 0,

  cozinhar: function (temperaturaDeCozimento) {
    console.log("this no contexto do Objeto comida", this);
    this.temperatura = temperaturaDeCozimento;
  },
};

console.log(comida);

comida.cozinhar(100);

console.log(comida);
*/