// GENERICS: Vamos passar um tipo genérico pra uma função, pra entender como o generics funciona;
/*
function makeArray(num: number) : Number[] {
    return [num]
}
const numbers =  makeArray(10)
console.log(numbers);
*/

//No exemplo acima a função makeArray está determinada a receber apenas números
//Mas digamos que eu quero que ela aceite number, string ou boolean, como proseguir, como deixar essa função genérica ?
/*
function makeArray<T>(num: number) : Number[] {
    return [num]
}
const numbers =  makeArray(10)
console.log(numbers);
*/

//A gente usa ' <T> ', esse T significa TYPE(tipo), então assim a gente está passando pra essa função um tipo genérico, é quase como se fosse um parâmetro de função
//Mas a gente está dizendo que a função makeArray está recebendo um tipo genérico e a gente vai usar esse tipo genérico dentro dela
// COMO FAZEMOS ISSO?
//Ao invés de receber ' number ' atribuimos esse T a função;
// T = tipo genérico
function makeArray<T>(item: T) : T[] {
    return [item]
}
const numbers =  makeArray(10)
console.log(numbers);
const names = makeArray('Cledeocir')
console.log(names);

//Assim deixamos a função mais genérica, pra poder reutilizar ela em diferentes pontos do nosso código, passando diversos tipos pra dentro dela
//Agora podemos fazer o exemplo da linha 30 funcionar sem o TS acusar erro
//CURIOSIDADE: Se eu fizer ' numbers.filter ' e passar o mouse em cima, vai ter um pop up com informações dizendo que numbers está recebendo um arra de type number
//IMPORTANTE! SEGURANDO CTRL + CLICK NO MÉTODO, EXEMPLO(filter) NÓS CONSEGUIMOS VER A DEFINIÇÃO DA FUNÇÃO.
numbers.filter()
//O " T " que aparece, é o generic, está recebendo um valor genérico nessa função, nesse método filter, pra poder usar dentro do filter qualquer tipo que quiser
//Quando filtramos alguma coisa utilizando o filter, nesse método de array, estamos querendo filtrar um array de string, de números, enfim qualquer tipo
//Então o filter é tipo um dos métodos que usa o GENERIC pra poder fazer uma filtragem, por qualquer tipo que a gente quiser.
//Tem vários outros métodos que usam o GENERIC, então JS, TS, linguagens de BACKEND, usam bastante o GENERIC ai pra poder deixar esse tipo de método mais reutilizável

//O GENERIC TORNA O CÓDIGO MENOS REDUNDANTE E COM MAIOR QUALIDADE QUANDO TEMOS VÁRIAS FUNÇÕES COM COMPORTAMENTOS PARECIDOS
