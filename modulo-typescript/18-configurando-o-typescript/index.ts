//O tsconfig é um arquivo que sempre vamos ver em projetos que utilizam esta linguagem
//Arquivos de configuração são bem comuns em softwares por ai, vamos ver como eles funcionam pra linguagem TypeScript que nós vamos configurar algumas informações

//Poderiamos criar esse arquivo simplesmente clicando na pasta que estamos, novo arquivo e definindo o nome do arquivo como "tsconfig.json"
//MAS TAMBÉM PODEMOS FAZER DA SEGUINTE MANEIRA:
//TERMINAL AQUI DO VSCODE OU GITBASH, adentrando a pasta que vamos configurar e passando o seguinte comando: " tsc -init " se estiver instalado globalmente, se a instalação foi feita com "npm install typescript --save-dev", então o comando no terminal deve ser: "npx tsc --init"

// NOTA: Veja que até agora utilizamos o TS sem precisar de um arquivo tsconfig, porque ?
//O TSCONFIG não é um arquivo obrigatório no TS, o TS vai inferir os valores padrões, caso o arquivo tsconfig não exista;
//MAS, SEMPRE que a gente quiser mudar alguma coisa na configuração do TS, vamos ter que ter esse arquivo tsconfig;
//Vamos criar esse arquivo do zero, no tsconfig desta pasta


//"noImplicitAny": true > Oque isso faz no nosso tsconfig, vamos exemplificar:
function printAge(age){
    console.log(age);
}
//O TS já acusa um erro, porque? Porque "noImplicityAny" significa, não vamos aceitar nenhum tipo Any implicíto no nosso código;
//Pra resolver ou passariamos pra esse age um tipo number ou iriamos no nosso arquivo tsconfig, e mudariamos o valor de "noImplicityAny" para false;
//Se eu decidir aplicar o false no tsconfig, poderia ocorrer um erro no meu código;
//O parâmetro "age" que deveria receber um number, poderia ser atribuido como uma string ou eu poderia atribuir um método qualquer a esse parâmetro, um método que ele não deveria ter, e isso pode causar um grande problema no meu software, e esse erro só ia ser capturado, quando eu rodar a minha aplicação, não seria possível capturar antes de rodar a aplicação;
//