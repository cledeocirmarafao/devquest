// As arrow-functions também são funções anônimas e são funções reduzidas; 
/*
let resultadoDaSoma = (numero1, numero2) =>{
    return numero1 + numero2
}

console.log(resultadoDaSoma( 12, 5))
*/

/*
const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao JS intermediário');
}

incentivarQuester('Cledeocir');
*/


// Quando uma Arrow Function tem só uma linha dentro do bloco de execução dela, a gente pode remover as ' chaves: {} ' e remover também o ' return ' 

// Estava Assim
let resultadoDaSoma = (numero1, numero2) =>{
    return numero1 + numero2
}

console.log(resultadoDaSoma( 12, 5))


// E reduzimos para assim, muito menos código.
let resultadoDaSoma = (numero1, numero2) => numero1 + numero2

console.log(resultadoDaSoma( 12, 5))

// Redução do incentivarQuester

// Estava Assim
const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao JS intermediário');
}

incentivarQuester('Cledeocir');

// E reduzimos para assim, sem as chaves;
const incentivarQuester = nomeQuester =>
    console.log('Parabéns ' + nomeQuester + ', Você chegou ao JS intermediário');

incentivarQuester('Cledeocir');