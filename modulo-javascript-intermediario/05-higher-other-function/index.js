// São funções que recebem outras funções como parâmetro ou retornam outras funções;
// Então podemos enviar uma função com um parâmetro pra outra função e também na hora de retornar alguma coisa dentro dessa função a gente pode retornar uma função também ao invés de retornar uma variável, um número, uma string por exemplo.

/*
const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
    const mesAtual = 2
    let anoDeNascimento = 2021 - idade
    if(mesDeNascimento > mesAtual) anoDeNascimento--
    imprimir(anoDeNascimento)

    console.log(imprimir);
    
}

let imprimirAnoDeNascimento = anoDeNascimento => {
    console.log('\seu ano de nascimento é ' + anoDeNascimento)
}

calcularAnoDeNascimento(33, 3, imprimirAnoDeNascimento)

*/

// -- PRÓXIMO EXEMPLO
// Vamos primeiro criar uma função normal que vai ser pra multiplicar um valor que vai ser passado por parâmetro e vai multiplicar por dois esse valor;

/*
function dobrar(numero) {
    return numero * 2
}

console.log(dobrar(2)); //4


Porque seria útil uma função retornar outra função? Se a gente quiser criar outras funções uma que triplica e outra que quadruplica o número;

function triplicar(numero) {
    return numero * 3
}

function quadruplicar(numero) {
    return numero * 4
}

console.log(quadruplicar(2));
*/


// Oque acontece no código acima? 
// Podemos ver que gera muito código repetido e a gente sabe que isso não é bom, ficar replicando código redundante não é bom. A gente pode melhoar isso e fazer um código muito mais reutilizável.
// Vamos fazer um código onde a única coisa que a gente vai mudar é o número multiplicador. 
//

function multiplicar(multiplicador) {
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quadruplicar = multiplicar(4)

console.log(dobrar(3));
console.log(triplicar(3));
console.log(quadruplicar(3));


// function dobrar(numero) {
//     return numero * 2
// }