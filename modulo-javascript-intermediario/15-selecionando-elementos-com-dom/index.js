//vai mostrar o document completo ( head, body, footer etc...)
/*
console.log(document);

let p = document.getElementById('paragraphOne')
//vai mostrar o parágrafo que está com o id
console.log(p);
//vai mostrar o document do body
console.log(document.body);
//O ACESSO ABAIXO NÃO FUNCIONA, porque?
console.log(document.body.p);
*/
// Não funciona porque pra acessar os paragrafos a gente precisa usar os métodos de bloco, mas quase sempre vamos usar como descreve  a linha 6; Mas, também tem outros métodos, como o seguinte:

//--------------------------------------------

/*
let inputPorClasse = document.getElementsByClassName('tag-de-input')
//assim teremos acesso a todos os itens que contenham essa class name;
console.log(inputPorClasse);
//Tá, mas e se eu quiser acessar um item específico? Seguinte:
console.log(inputPorClasse[0]);
//Buscaremos dentro dos colchetes o índice do item que queremos;
*/

//---------------------------------------------
/*
let inputPorTag = document.getElementsByTagName('input')

console.log(inputPorTag);
*/

//----------------------------------------------

let inputPorName = document.querySelectorAll("input[name='email']");

console.log(inputPorName);
