import "./App.css";
// import Card from "./components/card/card";
import "./components/card/card.css";
// import './components/cards/cards'
import Cards from "./components/cards/cards";
//* Muitas vezes não vamos querer que nossas funções como o App retornem vários elementos ao mesmo tempo. Muitas vezes vamos preferir ter um elemento pai, que ele sim, vai conter a lista de Elementos.
//* Então se eu vou ter uma lista de Cards, eu posso pensar num elemento pai que o nome dele pode ser 'cards'
//* Então vamos criar esse componente na nossa pasta 'components'
function App() {
  return (
    <>
      <Cards/>
    </>
  );
}

export default App;
