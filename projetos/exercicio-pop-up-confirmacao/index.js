/*let resposta = window.confirm('Seja bem vindo(a) aventureiro(a)! Gostaria de pagar $50,00 para passar a noite na nossa hospedagem?')

if (resposta === true) {
    console.log('Ótimo! Nós temos as melhores camas de toda região')
} else {
    console.log('Que pena! Você parecia ser mais legal!')}
*/

const resposta = confirm('Seja bem vindo(a) aventureiro(a)! Gostaria de pagar $50,00 para passar a noite na nossa hospedagem?')

if(resposta){
   alert('Ótimo, nós temos as melhores camas de toda região!')
} else {
    alert('Que pena, você parecia ser mais legal!')
}