//REFRESCANDO A MEMÓRIA: Objetos no Javascript são valores que podem conter propriedades
//Com o TypeScript vamos poder definir tipos específicos pra esses OBJETOS;
//Precisamos utilizar a palavra chave TYPE;
type Costumer = {
    name: string;
    age: number;
}
//COMO USAR ESTE OBJETO ?
//Basicamente uma função que vai mostrar as informações desse cliente;
function showCustomerInfo(customer: Costumer) {
    console.log(`O nome do cliente é: ${customer.name}`);
    console.log(`A idade do cliente é: ${customer.age}`);
}