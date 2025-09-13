/*
function (a, b, ...args);{
        ...
}
*/
/*
function incentivarQuester(mensagem, ...nomeQuester) {
    console.log(`${mensagem} ${nomeQuester}`);
    
}
incentivarQuester('Parabéns, você chegou ao Javascript avançado', 'Cledeocir.')
*/
//Na função acima estou incentivando apenas um quester. Mas e se eu quiser incentivar mais de um quester ao mesmo tempo?
//Utilizando o REST, demonstração abaixo
//Passando o parâmetro rest " ... "
/*
function incentivarQuester(mensagem, ...nomesQuesters) {
    console.log(`${mensagem} ${nomesQuesters}`);
    
}
incentivarQuester('Parabéns, você chegou ao Javascript avançado', 'Cledeocir', 'Alice', 'Helena', 'Aurora')
*/
//como seria mais de um, teria que mudar o parâmetro de nomeQuester para nomesQuesters
//Sendo assim, após a mensagem que é o primeiro parâmetro, eu poderia passar vários nomes;

//E se eu quisesse incentivar um por um?
//Poderia usar o map pra fazer isso 

function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`)) 
}
incentivarQuester('Parabéns, você chegou ao Javascript avançado', 'Cledeocir', 'Alice', 'Helena', 'Aurora')

// --IMPORTÂNTE ---
//O rest é ideal que esteja sempre situado no último parâmetro da função, assim:
//function incentivarQuester(mensagem, ...nomesQuesters){}

//Se ele ficar em primeiro ou no meio, vai dar erro de syntax. Exemplo abaixo;
//function incentivarQuester(mensagem, ...nomesQuesters, testeParametro)