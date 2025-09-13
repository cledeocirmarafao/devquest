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
