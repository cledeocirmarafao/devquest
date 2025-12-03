import React from "react";
//Criando um component com classe
//Do lado esquerdo (card) está herdando as características, do lado direito (Component) é quem as está passando
//Pra funcionat, precisamos importar o React(linha 1)

// Utilizando Classes
/* 
class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>{this.props.title}</h3>
                <p>Esse é o texto do card</p>
            </div>
        )
    }
}
*/

//Utilizando Função
/*
const Card = (props) => {
    return(
        <div className="card">
                <h3>{props.title}</h3>
                <p>Esse é o texto do card</p>
            </div>
    )
}
*/

//Retiro o THIS porque ele é somente para as Classes e passo 'props' como parâmetro
//Na função também poderiamos utilizar um conceito chamado de ' Short Hand Notation ', que seria assim:
const Card = ({ title }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Esse é o texto do card</p>
    </div>
  );
};

export default Card;
