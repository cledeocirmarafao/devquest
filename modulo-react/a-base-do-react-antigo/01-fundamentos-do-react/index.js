const root = document.getElementById("root");
//A lkinha acima está capturando nosso elemento root lá no html
const p = React.createElement("p", null, "Olá, mundo!");
//Na linha acima estamos utilizando a função createElement para criar um elemento react, então basicamente ela vai representar um parágrafo com o texto 'Olá, mundo!'. O primeiro argumento é o tipo do elemento, que vai ser um parágrafo(p), o segundo são os atributos, como não tem nenhum atributo vai estar(null) e o terceiro é o conteúdo do elemento('Olá, mundo!)
const reactRoot = ReactDOM.createRoot(root);
//A linha acima eu tô criando uma raíz do react usando o ReactDOM.createRoot e associando ao elemento html capturado na variávekl da linha 1, o root

//A raíz do react é a parte central da nova api DO REACT 18 que permite uma renderização mais otimizada e assíncrona

reactRoot.render(p);
//E essa última linha acima é a responsável por renderizar o elemento p no elemento html que a gente específicou como a raiz