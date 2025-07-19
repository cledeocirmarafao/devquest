/*
----- FOR -----

for(inicializador; condição; incremento){
 declaração
}
*/

// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// for(let i = 0; i < 5; i++)
// console.log('Olá mundo!')

//----- WHILE -----

//while significa enquanto

/*
while(condição){
<bloco de execução>
}
*/

let a = 10
let b = 15

while(a < b){
    console.log('incrementando a variável a' + a)
    a++;
}

//----- DO WHILE -----

/*
do{
<bloco de execução>
}while(condição)
*/

var i = 1

do{
    console.log('entrou' + i)
    i++;
}while(i <= 5)

    //A diferença básica do while para o do-while é que o do-while vai executar e depois testar, o while vai testar e depois executar