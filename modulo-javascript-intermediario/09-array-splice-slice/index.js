//-------------- SLICE ---------------

//Com o Slice a gente vai tirar um pedaço do Array; Ele vai fazer uma cópia do Array, dos itens que a gente retirou mas sem afetar o Array original.
// O slice não é inclusivo.


let frutas = ['Banana', 'Maça', 'Laranja', 'Uva']
/*
let frutasExtraidas = frutas.slice(1, 3)

console.log(frutasExtraidas);
console.log(frutas);
*/

// ------------- SPLICE --------------

// Com o SPLICE vamos remover um item pela posição indice desse item e vai gerar um Array totalmente novo;
// O SPLICE é muito usado quando queremos remover itens do meio do Array; porque com o PUSH e o POP só conseguimos remover do início e do fim do Array; Enrão pra trabalhar com elementos mais ao meio do Array vamos usar o SPLICE;

/*
let frutasExtraidas = frutas.splice(1, 2)

console.log(frutasExtraidas);
console.log(frutas);
*/

// Também podemos remover e adicionar outros elementos no lugar ao mesmo tempo, por exemplo:

let removeEAdiciona = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pêra')

console.log(frutas);
