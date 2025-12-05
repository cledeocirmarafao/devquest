import Card from "../card/card";
//* Ao invés de mantermos a estrutura da aula 08, vamos criar um array que vai renderizar os cards:
/*
const cardsTitle = ["Titulo Card One", "Titulo Card Two", "Titulo Card Three"];
const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        {cardsTitle.map((cardTitle) => (
          <Card key={cardTitle}>
            <h3>{cardTitle}</h3>
            <p>Este é um texto</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Cards;
*/

//* No exemplo abaixo, simularemos que dois dos titulos possuem identificadores iguais dentro do array, determinaremos cardsTitle com dois 'Titulo Card One, o console acusará um erro:
//?Encountered two children with the same key, `Titulo Card One`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
//*Para resolver, atribuiremos ao key um segundo parâmetro chamado index, dessa forma, o map percorerá o array e irá atribuir os valores ao elemento do indice(index), sanando assim o erro no console
const cardsTitle = ["Titulo Card One", "Titulo Card One", "Titulo Card Three"];
const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        {cardsTitle.map((cardTitle, index) => (
          <Card key={index}>
            <h3>{cardTitle}</h3>
            <p>Este é um texto</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default Cards;
//* O erro é cprigido porque assim temos chaves únicas conforme o map o percorre, 0, 1, 2