// -- Pra que serve um gerenciador de pacotes?
// Serve pra gerenciar pacotes e dependências de pacotes do nosso projeto;

// -- E oque é um pacote ?
// É uma biblioteca com vários códigos prontos pra gente usar nos nossos projetos;

// Quando a gente desenvolve projetos mais complexos geralmente a gente vai usar pacotes de outros desenvolvedores, pessoas ou empresas que desenvolveram esses pacotes pra resolver problemas ou fazer funcionalidades específicas pro nosso projeto;
// Então ao invés de ficar reinventando a roda pra fazer alguma coisa que uma pessoa já fez pra resolver um problema específico a gente usa esses pacotes nos nossos projetos, importamos o pacote o nosso projeto e usamos;
// Esses pacotes que vamos usar estão dentro desse gerenciador de pacotes, lá vai ter uma lista imensa de pacotes prontos pra gente usar;

// -- Oque é a dependêcia de pacotes ?
// Muitas vezes esses pacotes tem dependentes entre sí ou seja, o pacote que eu quero usar vai ter uma dependência com outro pacote que outro desenvolvedor fez, e o Yarn e o NPM vão fazer esse gerenciamento pra nós;
// Por isso muitas vezes quando baixarmos um pacote com o NPM ele vai acabar baixando vários pacotes por tabela, porque o pacote que baixamos vai ter dependência com vários outros pacotes;
// Então ele tenta baixar esse pacote que solicitamos mas esse pacote tem dependência e mais todos esses pacotes que tem dependência pra que todo nosso projeto possa funcionar;
// E o NPM e o YARN gerenciam também as versões que esses pacotes tem;
// Eles podem ter desde a versão inicial desses pacotes, que é a versão 1.0.0 até versões mais atuais que tem mais funcionalidades, mais correções de bugs;
//Essas versões são definidas por números e a gente consegue dizer exatamente qual versão queremos usar no nosso projeto
// Pra fazermos a instalação desses pacotes vamos usar geralmente a linha de comando, com o comando que está nas images com o nome 'comandos'