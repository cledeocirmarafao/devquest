// Existem os Arrays Multidimensionais mas oque a gente vai mais ver são os Bidimensionais, que são um Array dentro do outro.
//

/*
let filmes = ['Vingadores', 'Mulher Maravilha']
let descricaoFilme = ['Vingadores', 4.5, true]
*/

// Acima é uma das formas que poderiamos fazer, mas também podemos fazer da forma abaixo

/*
let filmes = ['Vingadores', 'Mulher Maravilha', ['Mulher Maravilha', 4.5, false]]
*/

// Pra facilitar a leitura do Array podemos deixar ele assim:

/*
let filmes =[
                ['Vingadores', 4.5, true],
                ['Mulher Maravilha', 4.5, false]
            ]

            console.table(filmes)
*/
// O console.table deixa mais organizada a lista, mais bonita de ver.

// Como a gente faz pra acessar um desses elementos do nosso Array Multidimensional?
// Digamos que eu quero pegar o nome dos Vingadores 

/*
let filmes =[
                ['Vingadores', 4.5, true],
                ['Mulher Maravilha', 4.5, false]
            ]

            console.table(filmes[0][0])
*/

// Dessa maneira eu vou estar pegando o nome dos vingadores que sabemos que o índice do Array sempre começa em zero;
// Se eu mudar o índice pra [1] eu vou ter a avaliação que seria [4.5], se eu mudar pra dois eu vou ter [true] que é a resposta pra se ele está em cartaz ou não; E se eu colocar apenas console.table(filmes[0]) eu vou ter o Array todo[nome, nota, se está em cartaz]

// E se eu quiser pegar o nome da mulher maravilha é só eu trocar o índice dos colchetes console.table(filmes[1][0])
// O [1] Acessa o Array e o [0] o primeiro elemento dentro desse Array;

// E dá pra ter mais Arrays dentro desse Array, por exemplo:

let filmes =[
                ['Vingadores', 4.5, true],
                ['Mulher Maravilha', 4.5, false, ['Gal Gadot', 25]]
            ]

            console.table(filmes[1][3][0])
// Como fariamos pra acessar esse Array? Demonstração no console.table acima;
// Se em algum momento ficarmos confusos com a posição do Array, os números, basta dar um console.table(filmes[1]) pra ver o Array inteiro, assim vamos ver a posição numérica do elemento que estamos buscando;