import Card from '../card/card'
const Cards = () => {
  return (
    <div>
      <h2>Meus Cards</h2>

      <div>
        <Card>
          <h3>Titulo Card One</h3>
          <p>Esse é o texto do card</p>
        </Card>

        <Card>
          <h3>Titulo Card Two</h3>
          <p>Esse é o texto do card</p>
        </Card>

        <Card>
          <h3>Titulo Card Three</h3>
          <p>Esse é o texto do card</p>
        </Card>
      </div>
    </div>
  );
};
export default Cards;
