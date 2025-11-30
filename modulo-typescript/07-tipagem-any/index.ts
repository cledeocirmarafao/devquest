//TpeScript também tem um tipo especial que a gente pode usar quando não queremos que um valor específico cause erros de verificação de tipos ou quando a gente não tem certeza do tipo daquela variável que a gente está utilizando, esse tipo especial é o ANY(qualquer)
//Então a gente diz que o elemento seria de qualquer tipo, mas devemos evitar ao máximo o uso do ANY, PORQUE?
//Quando o valor é do tipo ANY, ele desabilita a tipagem da variável
//No TypeScript, o próprio  typescript tenta inferir o tipo da variável a partir do valor dela, por exemplo:
//Passando o mouse em cima do nome da variável o TS já infere que esta variável é do tipo number;
// let moviesCount = 10;

//Se eu dizer que está variável é do tipo ANY, ao passar o mouse em cima ela mostrará que agora esta variável é do tipo ANY, e se eu tentar atribuir ua string a ela o TS vai deixar, oque não ocorre no exemplo acima;
// let moviesCountAny: any = '10'

//Isso seria um problema, porque quanto mais tipado nosso código, melhor, evita muito mais erros e bugs
//Outro Exemplo:
/*
function sum(number1,number2) {
    return number1 + number2
}
*/
//O TS já acusa que os parametros são do tipo ANY, oque pode ser problemático, porque se eu fizer:
// console.log(sum(10, 20)); // Daria 30, porém, se eu fizer:
// console.log(sum('10', 20)) // Daria 1020, porque o JS vai contatenar ao invés de somar, por um ser um number e uma string
//Se tiparmos o código com precisão definindo:
function sum(number1:number, number2: number) {
        return number1 + number2
}
//e tentar fazer o console.log:
// console.log(sum(10, '20'));
//O TS acusará o erro;

// O ANY seria como o 'coringa' do typescript, basicamente um dos propósitos dele é que caso TS não saiba algum tipo de variável do teu código, ele sempre irá inferir ela como 'ANY'
//Com isso seu código não vai dar erros quando você transformar um código JS para TS
//Mas não significa que seu código esteja bom, quer dizer que não aponta erros por 'usar' esse tipo coringa só pra fazer seu código funcionar mesmo

//ENTÃO, QUANDO USAR O ANY ?
//Quando a gente estiver trabalhando com código legado, antigo que outra pessoa fez que não pode ser facilmente refatorado.
//Nesses casos a gente pode usar o ANY pra não perder tanto tempo refatorando
//Geralmente um código legado, antigo, gigantesco, monolito que se chama, é um código quevai ser difícil reescrever, então pra esses casos a gente pode usar  ANY, nos tipos das variáveis que a gente não conhece.
// Outro caso, quando estamos trabalhando com bibliotecas externas em que os tipos não estão definidos ou não estão disponíveis pra gente ver 

//EM RESUMO: O ANY é uma ferramenta poderosa mas deve ser usada com cautela
//Sempre que possível, específique os tipos das variáveis pra ter segurança de tipo, que é o propósito do TS e pra tornar o código fácil de manter, mais legível com menos bugs e problemas.