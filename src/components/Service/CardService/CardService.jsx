import './CardService.css'

function CardService({logo, title, description}) {
    return (
        <article className="card-service">
            <img src={logo} alt="" className="card-service-logo" />
            <h1 className="card-service-title">{title}</h1>
            <p className="card-service-description">{description}</p>
        </article>
    )
}

export default CardService