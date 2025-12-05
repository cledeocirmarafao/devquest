import Card from "../card/card";

const cardsTitle = ["Titulo Card One", "Titulo Card Two", "Titulo Card Three"];

const showCardColor = (color) => {
  console.log(color);
  
}

const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        {cardsTitle.map((cardTitle) => (
          <Card key={cardTitle} showCardColor = {showCardColor}>
            <h3>{cardTitle}</h3>
            <p>Este é um texto</p>
          </Card>
        ))}

        <Card color='purple' showCardColor = {showCardColor}>
            <h3>Card com fundo roxo</h3>
            <p>Esse é um texto</p>
        </Card>
      </div>
    </div>
  );
};
export default Cards;