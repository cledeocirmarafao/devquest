/*
import somar from './operacoes-matematicas.js'

console.log(somar(2, 3));
*/

// Quando utilizamos o Export Default não usamos as chaves no import da função; 
//Com Default: import somar from './operacoes-matematicas.js';
//Sem Default: import { somar } from './operacoes-matematicas.js';

// Mas porque isso acontece? 
// Quando utilizamos o EXPORT DEFAULT podemos ter apenas uma exportação por arquivo e quando importamos temos que especificar um nome e então usar esse nome;
// A nomeclatura da importação é totalmente independente do nome da função;
// Por exemplo: se eu mudar o nome no import e no console log, vai continuar funcionando tranquilamente;

// -- Já na EXPORTAÇÃO NOMEADA não daria pra fazer isso(linha 12)
// Os exemplos da aula 21 na pasta JavaScript Avançado já são exemplos de exportação nomeadas por arquivo;
// Então pra usar a exportação nomeada a gente precisa retirar o default e inserir as chaves e passar o nome da função dentro das chaves, exemplo ( linha 19 arquivo 'operacoes-matematicas.js')
// E também inserir as chaves no import
import { somar } from './operacoes-matematicas.js'

console.log(somar(2, 3));
// Mas nesse tipo de exportação o nome da função importada tem que ser o mesmo nome da função exportada;


//-------- Qual exportação usar ?
// De preferência a exportação nomeada. Por que ?
// Se um dia eu precisar trocar o nome da função que nesse exemplo é 'somar' e eu for ao meu index.js, mesmo alterando o nome da função ela vai continuar funcionando, como visto anteriormente e isso não é bom;
//Isso pode gerar muita confusão e até erros no nosso código, então é preferível se usar a exportação nomeada;
// Sendo assim seriamos obrigados a trocar o nome da função na importação, deixando o mesmo nome que estaria na exportação;
// Nesse caso isso é bom porque vai nos forçar a realizar a troca do nome da função em todos os arquivos que estiverem importando o nosso módulo;
// Vai evitar que eu esqueça de mudar o nome da função em algum arquivo que esteja importando o módulo, consequentemente dá mais consistência no meu código;

// Se eu usar o Export Default, mesmo mudando o nome da função na ela continuaria funcionando normalmente e isso gera inconsistência no meu código, eu estaria usando u nome diferente pra uma função nova ou uma função diferente que eu tenha criado então não é uma boa prática;

