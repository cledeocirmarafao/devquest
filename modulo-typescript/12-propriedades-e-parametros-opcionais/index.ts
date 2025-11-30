// No TypeScript, podemos definir propriedades e parâmetros com valores opcionais, por exemplo:
/*
type Customer = {
    firstName: string;
    lastName: string;
    age: number;
}
*/

//Supondo que na minha loja online, o parametro lastName não é obrigatorio, então eu defino "lastName?: string";
//No exemplo acima ele está sendo obrigatório, no exemplo abaixo não;
type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}
//COMO UTILIZAR ISSO NO MEU CÓDIGO?
//Vai depender de uma análise minha, do meu time, pra ver quais campos são ou não são obrigatórios;
//ENTÃO COMO POSSO UTILIZAR ESTE OBJETO ?
const newCustomer: Customer = {
    firstName: "Cledeocir",
    age: 29
}
//Então no exemplo acima, eu tô criando um objeto, newwCustomer, sendo um novo cliente dentro do meu sistema com essas duas propriedades;
//Pra ver esse Objeto, compilar;
console.log(newCustomer);
//Então eu não defini o lastName nesse novo objeto e ele funcionou sem problema nenhum
//Se eu remover o ponto de interogação do lastName, ele volta a se tornar obrigatório e o TS acusa um erro na minha constante;

//OUTRO CASO QUE PODEMOS VER:
//FUNÇÕES! Funções também podem ter parâmetros opcionais!
function printName(firstName: string, lastName?: string) {
   console.log(`O primeiro nome é : ${firstName}`)
   console.log(`O ultimo nome é : ${lastName}"`)
}
//Então se eu passar por exemplo:
printName("Cledeocir")
//Passando apenas um parâmetro, vai funcionar, porque o lastName, segundo parâmetro, é opcional;

//ENTÃO LÁ NO NOSSO SISTEMA, se o segundo parâmetro vier a gente vai por exemplo, salvar no banco de dados, se não vier, não vamos fazer nada, porque esse segundo parâmero é opcional.