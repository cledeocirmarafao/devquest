//Linguagem Explicita:

// let nome: string = "Marafa";
// Se eu tentar atribuir um número a variável 'nome', o TypeScript vai acusar um erro de tipo e não vai deixar compilar
// nome = 28; // Erro de tipo

// Se eu determinar a variável nome explicitamente como uma String eu não vou conseguir atribuir outro tipo de valor a ela
// nome = "João"; // Ok nome = "123"; // Not OK

// Na maioria dos casos, A Linguagem Explicita, a tipagem Explicita ela não é necessária no TypeScript, porque sempre que possível o TypeScript vai tentar inferir o valor automaticamente olhando pro teu código e tentando interpretar qual é o tipo daquela variável

//Então aqui temos outro conceito importane, que é a INFERÊNCIA DE TIPO, exemplo:
// let nome = "Marafa";

// Nesse caso, o TypeScript já infere que a variável 'nome' é do tipo String, então se eu tentar atribuir um número a ela, o TS vai acusar um erro de tipo, exemplo:
// nome = 28; // Erro de tipo