// let nome = "Marafa";
// Nesse caso, o TypeScript já infere que a variável 'nome' é do tipo String, então se eu tentar atribuir um número a ela, o TS vai acusar um erro de tipo, exemplo:
// nome = 28; // Erro de tipo

//Outro exemplo usando uma função
function sum(number1: number, number2: number): number {
    return number1 + number2;
}
let resultado = sum(10, 20);
// Nesse caso, o TypeScript infere que a variável 'resultado' é do tipo number, se eu passar apenas um número na função sum, o TS vai acusar um erro de tipo
// let resultado = sum(10); // Erro de tipo

// O TypeScript também nos ajuda a identificar propriedades e métodos, exemplo:
const movies = ["Matrix", "Van Helsing", "John Wick"];
// Vamos supor que eu quero acessar o método 'ClassList' que não existe em um array, o TypeScript vai acusar um erro de tipo
// movies.classList; // Erro de tipo
// Se eu simplesmente digitar 'movies.' o TypeScript já me sugere todos os métodos e propriedades que existem para um array, como 'push', 'pop', 'length', etc.

// A VERIFICAÇÃO DE TIPO ESTÁTICO NÃO DISPENSA OS TESTES NEM NOS BLINDA DE ERROS.