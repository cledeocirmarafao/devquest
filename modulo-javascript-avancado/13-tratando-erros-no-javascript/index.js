let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if (typeof chaleiraEstaNoFogao != 'boolean') throw 'somente booleano'
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
      console.log("Passo 1 finalizado: A água foi fervida");
      resolve();
    } else {
      const mensagemDeErro = 'é necessário ligar a chavleira elétrica'
      reject(mensagemDeErro)
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

let chaleiraEstaNoFogao = 'teste';
let fogaoEstaLigado = true;

async function iniciarProcessoDeFazerCafe(){
  try{  const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafeFeito = await passarCafe(aguaFervida)
    const tomarOCafe = await tomarCafe(cafeFeito)
    const lavarAXicara = await lavarXicara(tomarOCafe)

    // throw 'erro'
  }catch(err){
    console.log(err);
  }finally{
    console.log('Show me the code!');
  }
}

iniciarProcessoDeFazerCafe()

// O FINALLY sempre vai executar, independente do try e do cath;
// O FINALLY é muito indicado pra coisas como fechar uma conexão de banco de dados ou fechar arqivos que foram abertos pra leitura pra que se der um erro no TRY o arquivo ou a conexão do banco de dados não fique indefinidamente aberta e possa gerar algum erro grave no nosso sistema

// com o THROW nós mesmos podemos jogar um erro pro CATH pegar
// Geralmente esses erros são chamados de exeções

// Vimos um erro sendo gerado através do REJECT mas nós mesmos via código, podemos gerar uma exeção, usando o THROW

// O THROW pode retornar uma string, um boolean, um número e inclusive também pode retornar uma função ou usar construtores do próprio javascript pra dar um throw de um erro especifico