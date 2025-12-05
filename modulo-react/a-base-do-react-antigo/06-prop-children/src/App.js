import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import "./components/card/card.css";

function App() {
  return (
    <>
      <Button />

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
    </>
  );
}

export default App;
