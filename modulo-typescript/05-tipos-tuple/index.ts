// Os tipos tupes são como arrays, porém ele sabe extatamente quantos elementos e o tipo de dados que estão contidos nele.
// Mas quando eu uso as tuples(tuplas) eu preciso especificar quantos elementos eu vou ter e o tipo de cada elemento nas suas posições específicas, exemplo:
let dadosCliente: [number, string, string] = [1, "Cledeocir", "Marafão"];
//Se eu tentar atribuir outra string no local aonde deveria ser um number, o Typescript vai acusar um erro:
// let dadosCliente = ["1", "Cledeocir", "Marafão"]; // Vai dar erro

//Outro ponto importante; A Ordem Importa! Se eu tentar inverter a ordem dos tipos, também vai dar erro.
//Se eu não passar a quantidade exata de elementos, também vai dar erro.

// Uma coisa interessante é que eu posso ter elementos opcionais em uma tupla, exemplo:
let dadosFuncionario: [number, string, string?] = [1, "Cledeocir"];
// Nesse caso o terceiro elemento é opcional, então eu posso passar ou não.

//A Tupla é ideal quando queremos criar coleções com tamanhos e tipos específicos, garantindo maior controle sobre os dados armazenados.