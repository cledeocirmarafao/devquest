//TYPE ASSERTIONS, é basicamente dizer pro TS qual o tipo que a gente espera que aquele valor receba
//Isso porque as vezes o TS não vai saber qual o tipo que aquele valor deveria ou não receber, então a gente precisa deixar isso mais implicito pra ele
//EXEMPLO:
// const button = document.getElementById('button')

//Nesse primeiro momento, sem nem um index.html, se passar o mouse em cima dessa constante, veremos que esse elemento pode ser do tipo 'HTMLElement' ou 'null'
//O HTMLElement já existe, o TS já entende que são elementos de html que teriamos ai na tela, que podemos pegar e transformar em JS, já vimos isso em manipulação do DOM, o button seria o elemento que temos na tela e HTMLElement é o tipo dele
//Pra mim dizer explicitamente ao TS o tipo desse elemento, seria da seguinte forma
const button = document.getElementById('button') as HTMLButtonElement
//Assim, tudo que esta a esquerda do 'as' vai respeitar a estrutura do tipo que estou determinando a direita, nesse exemplo, como eu sei que ele é um button, posso determinar exatamente utilizando o HTMLButtonElement
//Agora se passar o mouse em cima dessa constante, mostrará que esse elemento é exatamente desse tipo que eu determinei e não mais aquele HTMLElement ou null, porque defini seu tipo explicitamente

//OUTRA COISA QUE PODERIA TER
//Digamos que esse button vai receber um eventListenner de click
/*
button.addEventListener('click', event => {
    const mouseEvent = event;
})
*/
//Se eu deixar assim, ao passar o mouse em cima de mouseEvent, o TS mostrará que essa constante é do tipo pointerEvent
//Mas eu posso determinar que ele será do tipo 'mouseEvent' explicitamente da seguinte forma:
button.addEventListener('click', event => {
    const mouseEvent = event as MouseEvent;
})
//Agora se eu passar o mouse em cima da constante, o TS acusará que mouseEvent é o tipo dela;
//Dessa forma conseguimos determinar explicitamente o tipo dos nossos elementos utilizando o TYPE ASSERTIONS
//Se não o TS vai tentar inferir qual é o tipo dos nossos elementos e nem sempre queremos isso, de preferência devemos deixar bem explicíto oque é tal tipo que estamos usando, até pra poder utilizar tudo oque o tipo que estamos usando tem a oferecer
//Então sempre que vermos esse 'as' dentro de algum trecho de código podemos apostar que a pessoa que escreveu o código está dizendo ' O tipo que eu quero que esse valor seja é esse tipo aqui que eu tô especificando '
//Assim o TS vai entender exatamente qual é aquele tipo e tu vai poder utilizar todos os benefícios daquele tipo também, e isso vai facilitar seu entendimento do código.