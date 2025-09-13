// Quando a gente diz que uma execução de código é síncrona, basicamente estamos dizendo que ela segue um fluxo linear de exucução.
//O JavaScript faz isso, ele exucuta nosso código de cima para baixo, então ele só executa uma função que esteja ali no JavaScript depois que a função anterior a ele foi executada. É como se fosse uma dependência de uma linha pra outra.
// Mas na execução assíncrona a gente não tem ess adependênci.
// Quando a gente tem essa função assíncrona é como se ela se descolasse do fluxo e não vai necessáriamente esperar a execução da linha de código anterior pra que ela mesma execute.
//Básicamente ela vai passar pra instrução seguinte de código sem esperar essa linha anterior;
// E vai executar depois de um tempo, assim como a gente viu ali no setTimeout, por exemplo;

function colocarAguaPraFerver() {
    console.log('colocar água pra ferver');
    setTimeout(() => {
        console.log('a água ferveu');
        
        passarCafe()
    }, 5000);
}

function prepararPraPassarCafe() {
    console.log('pegar o pó de café');;
    console.log('pegar o açucar')
    console.log('pegar a xícara')
    console.log('pegar a água quente')
}
function passarCafe() {
    console.log('passando o café');
} 

colocarAguaPraFerver()
prepararPraPassarCafe()


// O código acima é um código síncrono, ele vai executar exatamente na sequência que está aparecendo as funções, no caso a invocação das funções, primeiro a linha 22, depois a 23 e por último a 24.
// Mas nessa sequência,a função da linha 24 só vai ser executada quando as outras duas funções já estiverem sido executadas;
// Mas se por exemplo a função da linha 22 demorar cinco minutos pra ser executada totalmente, a função da linha 23 vai ficar esperando todo esse tempo pra ser executada. 

// então pra evitar essa espera dentro da função colocarAguaPraFerver eu vou atribuir o setTimeout com a função passarOCafe e dar um console log. Apartir deste momento, o código se tornou assíncrono.