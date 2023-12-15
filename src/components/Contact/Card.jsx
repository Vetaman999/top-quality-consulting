import './Card.css'

function Card({ logo, title, description }) {
    return (
        <article>
            <header className="card">
                <img src={logo} alt="" className="card-logo" />
                <div className='card-content'>
                    <strong className="card-title">{title}</strong>
                    <span className="card-description">{description}</span>
                </div>
            </header>
        </article>
    )
}

export default Card