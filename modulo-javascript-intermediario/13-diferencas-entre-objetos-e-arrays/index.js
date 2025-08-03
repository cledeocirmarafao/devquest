// O Array é uma estrutura de dados que funciona muito bem quando a gente quer trabalhar com listas, quando precisamos colocar vários elementos dentro de uma lista e trabalhar com essa lista;

let frutas = ['Uva', 'Banana', 'Melão']

let videoGame = {
    nome: 'Xbox',
    valor: 3000
}

let videoGame2 = {
    nome: 'Playstation',
    valor: 5000
}

let videoGames = [videoGame, videoGame2]
// Abaixo segue a forma como acessaríamos esse Array;
console.log(videoGames);
// E aqui é como acessaríamos o nome do video game 2 que está  dentro desse Array;
console.log(videoGames[1].nome);
