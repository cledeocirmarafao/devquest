//O CONCEITO DE TPE ALIASES(APELIDO)
//A gente vai dar um apelido pra um tipo pr aficar mais fácil de saber oque aquilo ali significa;
//Isso também é bom pra gente poder utilizar esse tipo que a gente criou em outro ponto do nosso código;

type id = number | string; //Union type aplicado;

//type é a palavra chave e ID seria o valor
//Posso atribuir esse ID que eu criei aqui em cima pra essa  variável abaixo então, apartir de agora ' idCostumer ' pode ser um number ou uma string

let idCostumer: id;

//Então agora idCostumer pode receber tanto um number quanto uma string, como mostra abaixo:
idCostumer = 100
idCostumer = "100"
//Oque mais eu posso fazer, por exemplo:
//Eu poderia ter um id dos meu produtos, ele também poderia ser tanto um number quanto string:
let idProduct: id; //O type aliases também poderia ser utilizado aqui pra dizer que o id do meu produto também pode ser num,ber ou string, então:
idProduct = 200
idProduct = "200"
//idProduct recebendo number e string, sem o TS acusar erro

//A vantagem disso é que se meu idCostumer e meu idProduct mudarem de valor, agora só podem receber números, eu tenho um ponto único de mudança, bataria remover o ' | string '
//Obviamente ele vai acusar minha alteração aonde esses argumentos recebem uma string, mas o ponto de mudança é um só.