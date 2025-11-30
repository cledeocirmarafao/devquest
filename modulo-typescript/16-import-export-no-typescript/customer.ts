export const paginationPerPage = 10
//quantidade de páginas que eu tenho no meu sistema 
export interface Customer {
  name: string;
  age: number;
};
//Poderiamos também utilizar o export default, mas ai não poderiamos utilizar o import nomeado, "Customer", e é bom utlizar, pra que alguém por exemplo, não possa importar um módulo nosso com o nome de "batata", por exemplo, que não é oque queremos
//Queremos sempre blindar nosso código, pra que as pessoas usem bons nomes, e o import nomeado é bom pra isso
//E se eu quiser exportar mais coisas? Exemplo na linha 1

//Poderia também exportar de outra forma, por exemplo:

const paginationPerPage2 = 10

interface Customer2 {
  name: string;
  age: number;
};

export { paginationPerPage2, Customer2 }
//Assim eu economizo a palavra Export, gerando menos código, e vai funcionar perfeitamente importando lá no index.ts