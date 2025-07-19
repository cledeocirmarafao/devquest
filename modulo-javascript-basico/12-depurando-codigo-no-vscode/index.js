function calcularFatorial(numero){
    let resultado = 1;

    for(let i = 1; i <= numero; i++){
        //console.log(`O valor de i é: ${i}`);
        
        resultado *= i;
        //console.log(`O valor de resultado é: ${resultado}`);
        
    }
    
    return resultado;
}

function imprimirFatorial(numero){
    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}

const numero = 5;
imprimirFatorial(numero);


//=== COMO DEPURAR UM CÓDIGO QUE TEM UM INDEX HTML ===

