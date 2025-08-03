//Representando um puqueno erro de digitação com a var valorBoleto para demonstrar que se houve um erro de digitação, como na linha 5; O console.log mostrará um erro e a linha aonde o erro se encontra. Sempre ler atentamente o erro e a linha do erro; Nesse exemplo abaixo o console mostrará que a primeiro console.log funciona normalmente, porém no segundo ele apresenta o erro, se invertermos a ordem e colocarmos o primeiro log errado e o segundo certo será exibido apenas o erro no primeiro console porque quando seu código der algum erro ele irá parr de funcionar
/*
let valorBoleto = 100

console.log(valorBoleto);

console.log(valorBolet);
*/

let inputTelefone = document.getElementById("telefone");

// console.log(inputTelefone);

inputTelefone.disabled = true;

function habilitarTelefone(){
    document.getElementById("telefone");
    inputTelefone.disabled = false
}