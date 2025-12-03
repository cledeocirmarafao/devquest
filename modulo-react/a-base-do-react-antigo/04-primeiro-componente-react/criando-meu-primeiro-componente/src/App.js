import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";
import './components/card/card.css'
//PROPS NO REACT: As props são propriedades, é a forma que temos pra passar alguma informação dos nossos elementos pra dentro dos componentes, pra que a gente possa alterar algumas propriedades de alguma caracteristica deles, e com as props conseguimos fazer um paralelo com os atributos de html
function App() {
  return (
    <>
      <Button />
      <Card title="titulo card 1"/>
      <Card title="titulo card 2"/>
      <Card title="titulo card 3"/>
    </>
  );
}

export default App;
