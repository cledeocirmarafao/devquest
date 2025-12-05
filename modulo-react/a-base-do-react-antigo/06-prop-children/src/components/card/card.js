import React from "react";
import './card.css'
//Exemplo utilizando prop Children
/*
const Card = (props) => {
  return <div className="card">
    {props.children}
  </div>;
};

export default Card;
*/

//Também poderiamos usar o 'Dhort Hand Notation', exemplo:
const Card = ({children}) => {
  return <div className="card">
    {children}
  </div>;
};

export default Card;