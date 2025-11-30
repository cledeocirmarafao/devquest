//Enums é são um dos poucos conceitos do TypeScript que não existem no JavaScript puro.
//Os Enums são interessantes para deixar o código mais legível e organizado.
//Enums no TypeScript são uma ferrramenta para lidar com conjuntos de valores constantes no desenvolvimento de software.
// Eles são simples mas ajudam muito porque podemos nomear essas constantes, tornando o código mais legível e fácil de manter e de entender.

//Enum Numérico:
enum Cores {
  Vermelho, //0
  Verde, //1
  Azul, //2
}

//IMPORTANTE! Sempre que um Enum é criado, inicie-o com letra MAIÚSCULA para seguir as boas práticas de nomenclatura.
//As propriedades do Enum são iniciadas com letra MAIÚSCULA também. Como mostra o exemplo acima.
//Esse Enum numérico é iniciado com o valor 0, e cada propriedade subsequente recebe um valor incrementado em 1 automaticamente.
//Se eu iniciar o primeiro valor com um, o próximo será 2, o próximo 3, e assim por diante.
/*
enum CoresPersonalizadas {
    Amarelo = 1, //1
    Roxo,        //2
    Laranja      //3
}
*/
// =========================================================

//Pode parecer contraintuitivo, mas o valor do elemento é um número 0, apesar de estarmos escrevendo "vermelho" em forma de texto
/*
enum CoresComNomes {
    Vermelho = 0,
    Verde = 1,
    Azul = 2
}
*/

// porque isso é bom ? Digamos que eu quero criar uma função que vai exibir uma cor desse Enum acima:
/*
function showColor(color){
    console.log(color);
}
showColor(CoresComNomes.Vermelho); //0
*/

//Se um dia também precisar percorrer esse array de cores, posso fazer isso:
/*
for(let key in CoresComNomes){
    console.log(key);
}
*/
//Isso exibirá as chaves do Enum: 0, 1, 2, Vermelho, Verde, Azul; TOMAR CUIDADO COM ESSE TIPO DE PERCURSO, POIS ELE RETORNA TANTO AS CHAVES QUANTO OS VALORES DO ENUM, totalizando 6 itens.

// =========================================================

//Pode parecer contraintuitivo, mas os Enums numéricos também podem ter valores negativos.
/*
enum Status {
    Ativo = 1,
    Inativo = -1,
    Pendente = 0
}
*/

// =========================================================
// Exemplos de mundo real onde Enums podem ser úteis:

/*
enum UserResponse {
    Não = 0,
    Sim = 1
}
function respondedEmail(recipient: string, userResponse: UserResponse): void {
    // ... salvar no banco de dados se o usuário respondeu ou não
}

respondedEmail("Cledeocir", UserResponse.Sim)
*/

//Exemplo em um tipo de transação financeira:
//TradeType = Tipos de transação
//Podemos atribuir identificadores aleatórios dentro do Enum:
/*
enum TradeType {
    ACAO = 9281,
    TESOURO_DIRETO = 3221,
    TESOURO_SELIC = 6554,
}
*/
//Se fosse por exemplo ter uma função SaveTrade que salva uma transação financeira:
// saveTrade(TradeType.TESOURO_DIRETO)
//Poderia passar assim, fica mais fácil de entender que eu tô tentando salvar uma transação do tipo Tesouro Direto.

// Quando a gente quer usar StatusCode = Códigos de status; As Requisições HTTP tem vários códigos de status, como 200, 404, 500, etc. Podemos criar um Enum para representar esses códigos de status:
/*
enum StatusCode {
    OK = 200,
    NotFound = 404,
    InternalServerError = 500
}
//Podemos criar enums pra eles que poderiam ser usados dessa maneira:
StatusCode.OK
StatusCode.NotFound
StatusCode.InternalServerError
*/

//Além de tipos numéricos, também é possível ter tipos string dentro de um enum
//Enum de genêro
/*
enum Gender {
  M = "Masculino",
  F = "Feminino",
}
*/
//Porém no exemplo acima,ele não vai mais ter o comportamento de incrementar;

// E COMO EU PEGO DADOS DE UM ENUM ?
//Exemplo via StatusCode
enum StatusCode {
    OK = 200,
    NotFound = 404,
    BadRequest = 400,
}
//Maneiras de pegar os dados
const ok = StatusCode.OK //200
const indexOk = StatusCode['OK'] //200
const stringBadRequest = StatusCode[400] // BadRequest

//OS ENUMS SÃO MUITO UTILIZADOS EM CENÁRIOS AONDE A MUDANÇA DOS DADOS NÃO É CONSTANTE