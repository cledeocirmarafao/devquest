// Nessa aula todo esse código é um exemplo de como a gente fazia antes do Async, então vamos resolver usando o Async


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Passo 1 finalizado: A água foi fervida");
      resolve();
    } else {
      console.log("é necessário ligar a chaleira elétrica");
      reject();
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("Passo 2 finalizado: O Café foi passado");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("Passo 3 finalizado: Terminei de tomar o café");
    resolve(true);
  });
};

let lavarXicara = (cafeTerminado) => {
  return new Promise((resolve) => {
    console.log("Passo 4 finalizado: Terminei de lavar a xícara");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(() => {
    return passarCafe();
  })

  .then(() => {
    return tomarCafe();
  })
  .then(() => {
    return lavarXicara();
  })
  .then(() => {
    console.log("Cafézin finalizado, bora codar!");
  });


// --------- RESOLVENDO COM ASYNC ------------

// Estavamos usando o THEN pra gerar o encadeamento. Assim que uma função terminasse, executaria a outra.


let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Passo 1 finalizado: A água foi fervida");
      resolve();
    } else {
      console.log("é necessário ligar a chaleira elétrica");
      reject();
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise((resolve) => {
    console.log("Passo 2 finalizado: O Café foi passado");
    resolve(true);
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise((resolve) => {
    console.log("Passo 3 finalizado: Terminei de tomar o café");
    resolve(true);
  });
};

let lavarXicara = (cafeTerminado) => {
  return new Promise((resolve) => {
    console.log("Passo 4 finalizado: Terminei de lavar a xícara");
    resolve(true);
  });
};

let chaleiraEstaNoFogao = true;
let fogaoEstaLigado = true;

// Aqui vamos comentar essa função feita com o then e vamos criar uma função que vai ser realizada com o async


ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
  .then(() => {
    return passarCafe();
  })

  .then(() => {
    return tomarCafe();
  })
  .then(() => {
    return lavarXicara();
  })
  .then(() => {
    console.log("Cafézin finalizado, bora codar!");
  });


// Usamos o AWAIT na frente da função 
//const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
// O AWAIT é importânte pra que a gente espere a função ferverAgua terminar de executar e nos retornar o valor que a gente está esperando, SENÃO usarmos o AWAIT vai nos retornar a promise e não é iso que a gente quer na maioria das vezes porque só com a promise a gente não vai conseguir pegar o resultado tão fácil quanto usando o AWAIT
/*
async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    console.log(aguaFervida);
}

iniciarProcessoDeFazerCafe()
*/

// O async deve estar sempre a frente da função imediata, na função pai, como é acima, se ficar como no exemplo abaixo, vai dar erro;
/*
function
 async function iniciarProcessoDeFazerCafe(){}
*/

// IMPORTÂNTE --- Eusó vou conseguir usar a palavra chave AWAIT dentro de uma função se essa função tiver a palavra chave ASYNC

// Então o AWAIT vai aguardar o término da função pra ai então passar para a próxima linha e obter então o resultado da função que está sendo executada e continuar o fluxo do nosso projeto fazendo outras coisas
// Observe que nessa situação se aplica a dependência do resultado de uma função pra continuar o fluxo do nosso código. Como muitas vezes não se sabe quanto tempo vai demorar pro código executar a gente precisa tar ali o AWAIT pra ficar aguardando até que tenha o resultado e nos retorne
// Então o AWAIT espera até a promise estar no estado resolvida e a promise PRECISA estar resolvida pra que eu possa pegar o resultado e trabalhar com ele
// E com o resultado da função eu recebo a variável e posso então chamar a próxima função no código, exemplo:

async function iniciarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafeFeito = await passarCafe(aguaFervida)
    const tomarOCafe = await tomarCafe(cafeFeito)
    const lavarAXicara = await lavarXicara(tomarOCafe)
    if (lavarAXicara) console.log('Show me the code!');
}

iniciarProcessoDeFazerCafe()