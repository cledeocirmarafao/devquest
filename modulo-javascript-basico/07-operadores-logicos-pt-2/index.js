const a = 2
const b = 2

console.log(a === b && a <= b)
//teste a é idêntico a b? true depois, a é menor ou igual a b? true. Verdadeiro com verdadeiro: True

console.log(a === b && a < b)
//teste a é idêntico a b? true depois, a é menor que b? false. Verdadeiro com falso: False
console.log(a > b && a === b)
//teste a é maior que b? false depois, a é idêntico a b? true.Falso com verdadeiro: False

console.log(a > b && a < b)
//teste a é maior que b? false depois, a é menor que b? false.Falso com Falso: False

/*
----- OR -----
*/


console.log(a === a || a <= b)
//teste a é idêntico a b? verdadeiro depois, a é menor ou igual a b? verdadeiro.Verdadeiro com verdadeiro: true

console.log(a === a || a < b)
//teste a é idêntico a b? verdadeiro depois, a é menor que b? falso. Verdadeiro com falso: true

console.log(a > a || a === b)
//teste a é maior que b? falso depois a é idêntico a b? verdadeiro. Falso com verdadeiro: true

console.log(a > a || a < b)
//teste a é maior que b? falso depois a é menor que b? falso. Falso com falso: false

/* 
----- NOT -----
*/

console.log(a === b)//true
console.log(!(a === b))//false

console.log(a < b)//false
console.log(!(a < b))//true
