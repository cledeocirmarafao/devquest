//INTERFACES: Já vimos que é possível criar um tipo pra objetos utilizando o Type, agora vamos criar um tipo pra objetos utilizando o INTERFACE, eles fazem a mesma coisa mas tem algumas particularidades importantes
//Essa é a estrutura utilizando o Type:
/*
type Customer = {
  name: string;
  age: number;
};
*/

//UTILIZANDO O INTERFACE:
//Não recebe o sinal de igual ' = '
interface Customer {
  name: string;
  age: number;
}

interface Address {
    street: string
}

//O TYPE é mais fácil de trabalhar com tipos primitivos, o INTERFACE é melhor quando queremos criar um novo objeto, um objeto que vai conter as propriedades de um componente específico
//IMPORTANTE ENTENDER: O conceito a que eles se propõe é o mesmo, mas tem algumas particularidades importantes entre os conceitos de um e outro, por exemplo:
//O conceito de HERANÇA:  Por exemplo, quero criar um outro objeto que é o perfil (profile = perfil)
//Eu quero que meu Iprofile abaixo possa usar as propriedades da interface Customer acima, como fazer:
interface Iprofile extends Customer, Address{
    id: number
    createDate: number
}
//Dessa forma, agora eu tenho acesso as propriedades do objeto Customer, veja:
const newProfile: Iprofile = {
    name: 'Cledeocir',
    age: 29,
    street: 'camundongos 631',
    id: 7662, //poderia aqui também ser uma string ' number | string
    createDate: 2025
}
//Acima, eu consegui estender essas propriedades pra dentro dessa minha nova interface, eu HERDEI ela e posso usar a vontade
//Agora digamos que no futuro eu preciso também colocar o endereço do meu cliente dentro do meu sistema.
//Eu poderia colocar dentro do Customer(linha 12), mas aqui vai outro exemplo(linha 17)
//Como eu faria pro meu Iprofile ter o endereço do meu cliente também?
//Eu voltaria a linha 25, colocaria uma vírgula após o Customer e colocaria o Address ali.
//Assim eu estaria herdando as caracteristicas dessas duas interfaces pra dentro da minha interface Iprofile
//Mas agora se eu não passar o endereço dentro do meu novo objeto, o TS vai acusar um erro, então eu passo o endereço a ele(linha 30)

//DETALHE: Essa interface Iprofile também poderia ter suas próprias propriedades dentro, exemplo(linha 26 e 27), mas note também que assim que criadas essas propriedades, se elas não forem atribuidas ao objeto ou caracterizadas como opcionais('?'), o TS acusará um erro, então neste exemplo, adicionaremos elas ao objeto(linha 34 e 35)
//Esse é o poder da HERANÇA, a gente consegue adotar comportamentos de outras interfaces, sem precisar ficar repetindo

//PRA EXEMPLIFICAR, COMO SERIA FAZER ISSO COM O TYPE?

type TypeCustomer = {
  name: string;
  age: number;
}

type TypeAddress = {
    street: string
}
//Pra unificar os dois objetos fariamos assim
type TypeProfile = TypeCustomer & TypeAddress
//Agora utilizando o TYPE eu poderia criar um novo objeto, como o objeto da linha 30
const newTypeProfile: TypeProfile = {
    name: 'Cledeocir',
    age: 29,
    street: 'camundongos 631',
}
//Dependendo do sistema, podemos ver mais interfaces sendo usadas mas, podemos escolher qual delas usar, só é importante ter em mente algumas diferenças entre elas, tipo a 'extends'