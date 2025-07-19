/* operador de igual "=="
se colocar 3 "===" o comparativo será o valor e a tipagem, o tipo do valor

    == ---- igual ---- a==b ---- verdadeiro se a for igual a b

    === ---- idêntico --- a===b ---- se a for idêntico a b

    !== ---- não idêntico ---- se a não for idêntico a b

    != ---- diferente ---- a != b ---- verdadeiro se a for diferente de b

    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b

    <= ---- menor ou igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b

    > ---- maior ---- a > b ---- verdadeiro quando a for maior que b

    >= ---- maior ou igual ---- a >= b ---- verdadeiro quando a for maior ou igual a b
*/

//se a for igual a b independente da tipagem: true
const a = 3;
const b = "3";

console.log(a == b);

//se a for idêntico a b, validando a tipagem: false
const a = 3;
const b = 3;

console.log(a === b);

//se a não for idêntico a b: true
const a = 3;
const b = "3";

console.log(a !== b);

//se a for diferente de b, independente da tipagem: true
const a = 1;
const b = "3";

console.log(a != b);

//quando a for menor que b: true
const a = 2;
const b = "3";

console.log(a <= b);

//se eu colocar <= será "a é menor OU igual a b: true"
const a = 2;
const b = "3";

console.log(a <= b);

//verdadeiro se a for maior que b: true
const a = 4;
const b = "3";

console.log(a > b);

//verdadeiro se a for maior ou igual a b: true
const a = 5;
const b = "5";

console.log(a >= b);