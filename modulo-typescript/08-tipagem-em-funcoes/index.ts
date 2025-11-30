//PRIMEIRO CONCEITO, Type Anotation: dar um tipo para cada parâmetro da função.
function greet(name: string) {
    console.log(`Olá, ${name}!`);
}
greet('Cledeocir')
//Se eu tentar passar um parâmetro que não seja uma string, o TS vai acusar um erro;

//OUTRO CONCEITO LEGAL, IMPORTANTE! 
//A gente pode definir que uma função vai ter uma tipagem como um retorno dessa função;
//COMO FAZER ISSO:
//Uma função que vai dobrar o valor de um número;
function doubleNumber(number: number) {
    return number * 2
}
//Acima ainda não está definido que o retorno será de um tipo number, então se eu fizer:
const resultado = doubleNumber(3)
//E der um console.log: //Compilar para ver resultado.
console.log(resultado);
//Pra determinar explicítamente que o resultado será um tipo number, devo fazer o seguinte:
/*
function doubleNumber(number: number) : number {
    return number * 2
}
*/
//Assim estou determinando que o retorno dessa função sempre será do tipo NUMBER;
//Mas se eu deixar sem essa definição, o TS vai inferir de qualquer forma que o retorno dessa função será do tipo number, por que lembrando, o TS sempre vai tentar inferir qual é a tipagem, seja da função, variável, etc...
//Para testar isso, adicionar o ' : number ' na função e passar o mouse em cima da função na linha 16.

//Mas é bom que deixemos explicíto quando queremos que o retorno seja de um tipo, porque se o javascript tentar inferir e errar, a culpa vai ser nossa por não ter definido um tipo específico

// DICA: ESTÁ COM DÚVIDA DO QUE TAL FUNÇÃO RETORNA? Passe o mouse em cima dela