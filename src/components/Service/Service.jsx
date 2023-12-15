import './Service.css'
import CardService from './CardService/CardService'
import MainLogo from '../../assets/IconsService/main-logo.svg'
import AsesoramientoLogo from '../../assets/IconsService/asesoramiento-logo.svg'
import ImplementationLogo from '../../assets/IconsService/implentation-logo.svg'
import MejoraLogo from '../../assets/IconsService/mejora-logo.svg'
import ServiceIngLogo from '../../assets/IconsService/service-ing-logo.svg'


function Service() {
    return (
        <article className='service'>
            <section className="service-content"  id='Service'>
                <div className="service-first">
                    <img src={MainLogo} className="service-logo-main" />
                    <h1 className="service-first-title">Nuestos Servicios</h1>
                    <p className="service-first-description">Brindamos una variedad de servicios cubriendo las necesidades y requerimientos de cada uno de nuestros clientes, entre nuestros servicios destacan...</p>
                </div>
                <div className="service-second">
                    <div className="service-cards">
                        <CardService logo={ImplementationLogo} title="Implementación" description="Implementación en las diferentes certificaciones  ISO:21001 -  ISO:9001 - ISO:37001, etc." />
                        <CardService logo={AsesoramientoLogo} title="Asesoramiento" description="Asesorías en auditorias de seguimiento anual y certificación, licenciamiento y acreditación." />
                    </div>
                    <div className="service-cards">
                        <CardService logo={MejoraLogo} title="Procesos de Mejora Continua" description="Corrección y detección de errores y proceso de mejora en proyectos institucionales y empresariales." />
                        <CardService logo={ServiceIngLogo} title="Servicios de Ingeneria" description="En gestión ambiental, tratamiento de aguas residuales, estudios de impacto ambiental y proyectos de ingeniería." />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Service