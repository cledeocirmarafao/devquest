import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";
import "./App.css";

function App() {
  const handleClick = (name: string) => {
    alert(`${name}, Cliked`);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log("a tecla pressionada foi:", event.key);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Form Enviado!");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
  }

  return (
    <>
      <button onClick={() => handleClick("Cledeocir")}>Click me</button>
      <input type="text" onKeyDown={handleKeyPress} />
      <br />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite Aqui" onChange={handleChange}/>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default App;
