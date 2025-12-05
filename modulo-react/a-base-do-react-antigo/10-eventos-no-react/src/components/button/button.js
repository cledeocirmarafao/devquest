import './button.css'

const sayHello = () => {
    console.log('Olá');
    
}

const Button = ({ label = 'Click me' }) => {
  return <button className="btn" onClick={sayHello}>{label}</button>;
};

Button.defaultProps = {
    label: 'Click me'
}

export default Button