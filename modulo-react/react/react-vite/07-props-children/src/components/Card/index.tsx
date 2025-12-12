import './Card.css'

type CardProps = {
    children?: React.ReactNode
}

const Card = ({ children }: CardProps) => {
    //* Poderia ser assim:
    //? return <div className="card">{children ? children : <p>Nenhum conteúdo disponível</p>}</div>

    //* Ou assim, pra ser menos redundante:
    return <div className="card">{children || <p>Nenhum conteúdo disponível</p>}</div>
}

export default Card