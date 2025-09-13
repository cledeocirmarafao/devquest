let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
   return new Promise((resolve, reject) => {
    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
        console.log('começando o processo de ferver água');
        resolve()
    } else {
        console.log('é necessário ligar a chaleira elétrica');
        
        reject()
    }
})
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true
// Eu só posso usar o then aqui porque a função ferverAgua me retorna uma promise
//Então eu poderia aqui dizer, depois que a água ferver então eu vou passar o café
// E então eu posso ter uma função aqui

let passarCafe = () => {
    console.log('passando o café');
}
//Agora eu posso usar essa função que eu criei aqui passando a variável dentro do then.
ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo café');