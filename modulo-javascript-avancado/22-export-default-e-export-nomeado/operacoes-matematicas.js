//Podemos utilizar o export Default de duas formas, primeira;
/*
export default function somar(numeroUm, numeroDois) {
    return numeroUm + numeroDois
}


*/

// Segunda; 
/*
function somar (numeroUm, numeroDois) {
    return numeroUm + numeroDois
}

export default somar
*/
// --- Exemplo da exportação nomeada;
function somar (numeroUm, numeroDois) {
    return numeroUm + numeroDois
}

export { somar }
//