import './Cover.css'
import topLogo from '../../assets/logo.svg'

function Cover() {
    return (
        <>
            <section className='presentation'>
                <div className='presentation-background'></div>
                <div className='presentation-content'>
                    <div className='presentation-content-logo'>
                        <img src={topLogo} className="presentation-logo" alt="React logo" />
                    </div>
                    <div className='presentation-content-title'>
                        <h2 className='presentation-content-title-primary'>Top</h2>
                        <h2 className='presentation-content-title-secundary'>Quality</h2>
                        <h2 className='presentation-content-title-primary'>Consulting</h2>
                        <hr />
                        <span className='presentation-content-title-slogan'>Calidad, confianza y excelencia</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cover
