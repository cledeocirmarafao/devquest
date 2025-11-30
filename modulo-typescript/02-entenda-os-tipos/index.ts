// function sendMessage(userName: string, isLogged: boolean) {
//    console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
// }
// Se eu determinar 'userName' como um number, o TypeScript vai acusar um erro de tipo
// const userName = "Marafa"
// const isLogged = true

// sendMessage(userName, isLogged)

//No JavaScript puro, eu poderia fazer algo assim:
//const nome = "Beto";

//No TypeScript, eu preciso declarar o tipo da variável
// let nome: string = "Beto";

// 

//No JS
// let idade = 42;

//No TS
// let idade: number = 42;

// TANTO O JS QUANTO O TS não fazem diferenciação de float e double
// let altura: number = 1.8; Exemplo de float

// Boolean
// let isAdmin: boolean = true;

//Essa é a famosa tipagem do TypeScript, se eu tentar definir uma variável com um tipo diferente do que foi declarado, o TS vai acusar um erro

//Outra tipagem do TypeScript é o Array:
// let animais: string[] = ["Cachorro", "Gato", "Elefante"];
// let numeros: number[] = [1, 2, 3, 4, 5];
// let booleanos: boolean[] = [true, false, true];

//Podemos também atribuir formas mais genéricas, chamadas de Generics, exemplo:
// let animais: Array<string> = ["Cachorro", "Gato", "Elefante"];
// let numeros: Array<number> = [1, 2, 3, 4, 5];
// let booleanos: Array<boolean> = [true, false, true];

//Podemos também definir arrays que aceitam mais de um tipo de dado
// let misturado: (string | number | boolean)[] = [1, "Bola", true, 3, "Cachorro", false];

//Um outro tipo bem comum também é o Any, ele é um tipo especial do TypeScript que a gente pode usar sempre que a gente não quer que tenha algum tipo de erro de verificação de tipo
// let obj: any = {x:0};

// ESSES ACIMA SÃO TIPOS PRIMITIVOS DO TYPESCRIPT

//ALÉM DOS TIPOS PRIMITIVOS, TEMOS TAMBÉM OS TIPOS DE OBJETOS
// let pessoa: {nome: string, idade: number, isAdmin: boolean} = {
//    nome: "Marafa",
//    idade: 30,
//    isAdmin: true
// };

//OUTRO EXEMPLO DE OBJETOS
// function imprimirCoordenadas(pt: { x: number; y: number }) {
//  console.log("The coordinate's x value is " + pt.x);
//  console.log("The coordinate's y value is " + pt.y);
// }
// imprimirCoordenadas({ x: 3, y: 7 });

//também poderia ser assim:
// let obj : {x: number, y: number} = {x: 10, y: 15};

//Outro tipo de objeto muito usado no TypeScript são as funções
// function soma(a: number, b: number): number {
//    return a + b;
// }
// let resultado: number = soma(10, 20);