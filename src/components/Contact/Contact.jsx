import './Contact.css'
import Card from './Card'
import Phone from '../../assets/IconsContact/phone.svg'
import Maps from '../../assets/IconsContact/maps.svg'
import Email from '../../assets/IconsContact/email.svg'


function Contact() {
    return (
        <>
            <section className='contact' id='Contact'>
                <div className='contact-content'>
                    <div className='contact-content-left'>
                        <strong className='contact-content-primary'>Dispuestos a asesorarte</strong>
                        <strong className='contact-content-secundary'>Contentos de trabajar contigo</strong>
                        <span>
                            <p className='contact-content-par-one'>Valoramos la confianza que nuestros clientes nos brindan" o "estamos conscientes de que nuestros clientes confían en nosotros por lo que nos esforzamos al máximo para cumplir con nuestros proyectos según lo acordado.</p>
                            <p className='contact-content-par-one'>A continuación te proporcionamos todos nuestros datos de contacto para que puedas solicitar una asesoría con nosotros.</p>
                        </span>
                    </div>
                    <div className="contact-content-rigth">
                        <h2 className='contact-content-r-title'>Datos de Contacto</h2>
                        <div className='caja'>
                            <Card logo={Phone} title="Telefono" description="+51 951 513 366" />
                            <Card logo={Maps} title="Correo" description="informes@topquality-consulting.com" />
                            <Card logo={Email} title="Dirección" description="Huancayo, Junin - Perú" />
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Contact
