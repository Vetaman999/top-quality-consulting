import './Card.css'

function Card({ logo, title, description }) {
    return (
        <article>
            <header className="card">
                <img src={logo} alt="" className="card-logo" />
                <div className='card-content'>
                    <p className="card-title">{title}</p>
                    <span className="card-description">{description}</span>
                </div>
            </header>
        </article>
    )
}

export default Card