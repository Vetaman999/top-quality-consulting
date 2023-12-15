import './About.css'
import PictureOne from '../../assets/IconsAbout/picture-one.svg'
import PictureTwo from '../../assets/IconsAbout/picture-two.svg'


function About() {
    return (
        <article className='about' >
            <section className="about-content" id='About'>
                <div className="about-content-heder">
                    <h1 className="about-content-h-title">
                        Asesorate con nosotros
                    </h1>
                </div>
                <div className="about-content-first">
                    <div><img src={PictureOne} alt="" className="about-picture-one" /></div>
                    <div className="about-content-f-text">
                        <p className="text-one">Te apoyamos con nuestras asesorias </p>
                        <span>
                            <p className="text-two">Somos una empresa especializada en brindar asesorias para capacitar a instituciones en el proceso de la obtención de las certificaciones <a>ISO:21001-2018 y ISO:9001-2015</a>.</p>
                        </span>
                        <strong className="text-one">Asesorias profecionales a tu disposición</strong>
                        <p className="text-two">Como parte de crear nuestro propio camino y poder alcanzar la certificación para nuestros clientes, brindamos capacitaciones presenciales y remotos con <a>un equipo capacitado en las normativas y procesos institucionales</a> que involucran el proceso de las certifiaciones ISO.</p>
                        <strong className="text-one">Años de experiencia nos respaldan </strong>
                        <p className="text-two">Todo esto lo hacemos en beneficio de la educación  de nuestros clientes con la finalidad de continuar brindándoles la mejor calidad en las capacitaciones y valor en cada una de ellas. </p>
                    </div>
                </div>
                <div className="about-content-first">
                    <div className="about-content-f-text">
                        <strong className="text-one">Te Brindamos...</strong>
                        <span className="text-two">Certificaciones, procesos de mejora continua e implementaciones para cubrir las <a>necesidades y requerimientos</a> que se presenten en las capacitaciones.</span>
                        <ul className="about-list">
                            <li>Norma Internacional <a>ISO 21001:2018</a></li>
                            <li>Norma Internacional <a>ISO 9001:2015 </a></li>
                            <li>Norma Internacional <a>ISO 37001:2016</a></li>
                            <li>Norma Internacional <a>ISO 14001:2015</a></li>
                            <li>Norma Internacional <a>ISO 45001:2018</a></li>
                            <li>Norma Internacional <a>ISO 26000</a></li>
                            <li>Método 5S en Organizaciones.</li>
                            <li>Procesos de Mejora Continua.</li>
                            <li>Asesorías en auditorias de Seguimiento Anual y de recertificación.</li>
                            <li>Asesoría en Licenciamiento o Acreditación</li>
                            <li>Proyectos de Asesoría Pedagógica.</li>
                        </ul>
                        <strong className="text-one">Servicios de ingenieria</strong>
                        <ul className="about-list">
                            <li>Gestión Ambiental.</li>
                            <li>Tratamiento de Aguas Residuales.</li>
                            <li>Estudios de impacto ambiental.</li>
                            <li>Proyectos de Ingeniería (Diseño, ejecución).</li>
                        </ul>

                    </div>
                    <img src={PictureTwo} alt="" className="about-picture-two" />
                </div>
            </section>
        </article>
    )
}

export default About