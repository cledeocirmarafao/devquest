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
function makeArray(item) {
    return [item];
}
var numbers = makeArray(10);
console.log(numbers);
var names = makeArray('Cledeocir');
console.log(names);
//Assim deixamos a função mais genérica, pra poder reutilizar ela em diferentes pontos do nosso código, passando diversos tipos pra dentro dela
//Agora podemos fazer o exemplo da linha 30 funcionar sem o TS acusar erro
