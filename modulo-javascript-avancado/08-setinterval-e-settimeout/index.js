//O setTimeout define quanto tempo depois a função vai ser executada, fazendo o calculo do tempoo em milisegundos.

setTimeout(() => {
    alert('ya')
}, 2000);

//O setInterval o bloco decódigo dentro vai ser executado a cada X milisegundos e não só uma vez, como é no caso do setTimeout

setInterval(() => {
    console.log('ya');

}, 2000);

//Uma coisa IMPORTÂNTE de notar, é que o setTimeout e o SetInterval são métodos assíncronos, ou seja;
// Se tiver um código depois do setInterval por exemplo ele vai ser exutado primeiro, antes do SetInterval, exemplo:

setTimeout(() => {
  console.log("console dentro do setTimeout");
}, 4000);

console.log("console fora do setTimeout");

// Também conseguimos limpar o setTimeout ou o setInterval, ou seja, conseguimos parar a execução do setInterval se a gente quiser, por exemplo:
// Pra isso a gente vai precisar pega o ID do setInterval. Como fazemos isso?
// Precisamos definir uma variável e criar a função setInterval atribuindo essa função a minja variável.

let idDoInterval = setInterval(() => {
  console.log("executando a cada dois segundos");
}, 2000);

console.log(idDoInterval); // vai dar 1

// E ai como é que eu faço pra limpar, como eu faria pra parar a execução dele, seguinte:

let idDoInterval = setInterval(() => {
  console.log("executando a cada dois segundos");
}, 2000);

console.log(idDoInterval);
clearInterval(idDoInterval)

//criamos um clearInterval, que também é uma função e passamos o id do intervalo, que seria  a variável idDoInterval.
// Assim ele nunca irá imprimir o log que está dentro do setInterval
// Serve também com o setTimeout, só mudariamos pra clear timeout

