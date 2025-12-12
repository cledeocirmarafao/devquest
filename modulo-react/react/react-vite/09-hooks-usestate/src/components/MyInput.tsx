import { useState } from "react";

const MyInput = () => {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" placeholder="Digite ..." value={text} onChange={(event => setText(event.target.value))} />

      <p>Você Digitou: {text}</p>

      <button onClick={() => setText("")}>Limpar</button>
    </>
  );
};

export default MyInput;
