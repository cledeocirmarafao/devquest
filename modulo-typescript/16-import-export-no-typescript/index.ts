import { paginationPerPage, Customer } from "./customer";

interface SpecialCustomer extends Customer {
    couponQuantity: number
}
//E COMO USAR ?
//Vamos supor que ai dentro do meu e-commerce o cupom especial pode ser utilizado 10 vezes
const specialCustomer: SpecialCustomer = {
    couponQuantity: 10,
    name: 'Cledeocir',
    age: 29
}
//Pra importar a linha 1 do Customer.ts, linha 1