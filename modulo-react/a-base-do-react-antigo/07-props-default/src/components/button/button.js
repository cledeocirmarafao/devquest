import React from 'react'
import './button.css'
/* 
? ESTE MÉTODO ENSINADO NA AULA DO CURSO ESTÁ DEFASADO POR ATUALIZAÇÕES NO REACT
const Button = (props) => {
    return <button className='btn'>{props.label}</button>
}
*/

// ! Abaixo, método funcional nas versões atuais do REACT:
/*
const Button = ({ label = 'Click me' }) => {
  return <button className="btn">{label}</button>;
};
*/

//? Digamos que estou desenvolvendo um sistema e eu quero usar vários botões, um deles eu quero passar um 'Click Me' mas não através do label, quero que se eu não passar um label pra ele, que ele já venha com esse valor 'Click me' por padrão, pra isso utilizamos as DEFAULT PROPS, exemplo:
/*
Button.defaultProps = {
    label: 'Click me'
}
*/
// * Se quisermos utilizar mais props, adicionamos a vírgula e seguimos adicionando mais propriedades como padrão
// ? E se eu quiser utilizar o DEFAULT PROPS com classes, exemplo abaixo:
class Button extends React.Component {
    render(){
        return <button className='btn'>{this.props.label}</button>
    }
}

Button.defaultProps = {
    label: 'Click me com classes'
}
export default Button