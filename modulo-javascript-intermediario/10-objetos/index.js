//Essa é a Estrutura de um Objeto no JS; (cor) é a chave da propriedade, (branco) é o valor da propriedade;
// Também pode ser um valor vazio, exemplo: let tenis = {}
// Pra adicionar mais propriedades colocamos uma vírgula após o valor;

let tenis = {
    //chave: valor;
    cor: 'branco',
    tamanho: 42,
    emEstoque: true
}

// console.log(tenis['']);

// Como eu faria pra ver somente a cor desse Objeto? exemplo:
//console.log(tenis['cor']); Ou console.log(tenis.cor);

// Tamb´wm podemos adicionar propriedades aos Objetos mesmo depois deles já terem sido criados, por exemplo:
 tenis.valor = 200
 console.log(tenis);
 