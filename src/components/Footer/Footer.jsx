import './Footer.css'
import Facebook from '../../assets/SocialNetwork/facebook.svg'
import Instagram from '../../assets/SocialNetwork/instagram.svg'
import Youtube from '../../assets/SocialNetwork/youtube.svg'
import Whatsapp from '../../assets/SocialNetwork/whatsapp.svg'
import Linkedin from '../../assets/SocialNetwork/linkedin.svg'


function Footer() {

    const FACEBOOK_LINK = "https://www.facebook.com/TopQualitySAC?locale=es_LA"
    const INSTAGRAM_LINK = "https://www.instagram.com/aracelly_m_a"
    const YOUTUBE_LINK = "https://www.facebook.com/aracelly.municoalfaro?locale=es_LA"
    const WHATSAPP_LINK = "https://api.whatsapp.com/send/?phone=51951513366&text&type=phone_number&app_absent=0"
    const LINCKEDIN_LINK = "https://www.linkedin.com/in/aracelly-mu%C3%B1ico-alfaro-515b44184/"

    return (
        <>
            <section className="footer">
                <div className="footer-content">
                    <h2 className='footer-content-title'>Top Quality Consulting 2023 ©</h2>
                    <div className="footer-content-socialnetwork">
                        <a href={FACEBOOK_LINK} target="_blank"><img src={Facebook} /></a>
                        <a href={INSTAGRAM_LINK} target="_blank"><img src={Instagram} /></a>
                        <a href={YOUTUBE_LINK} target="_blank"><img src={Youtube} /></a>
                        <a href={WHATSAPP_LINK} target="_blank"><img src={Whatsapp} /></a>
                        <a href={LINCKEDIN_LINK} target="_blank"><img src={Linkedin} /></a>
                    </div>
                    <h2 className='footer-content-email'>informes@topquality-consulting.com</h2>
                </div>
            </section>
        </>
    )
}

export default Footer   