import './Footer.css'
import Facebook from '../../assets/SocialNetwork/facebook.svg'
import Instagram from '../../assets/SocialNetwork/instagram.svg'
import Youtube from '../../assets/SocialNetwork/youtube.svg'
import Whatsapp from '../../assets/SocialNetwork/whatsapp.svg'
import Linkedin from '../../assets/SocialNetwork/linkedin.svg'


function Footer() {
    return (
        <>
            <section className="footer">
                <div className="footer-content">
                    <h2 className='footer-content-title'>Top Quality Consulting 2023 ©</h2>
                    <div className="footer-content-socialnetwork">
                        <img src={Facebook} />
                        <img src={Instagram} />
                        <img src={Youtube} />
                        <img src={Whatsapp} />
                        <img src={Linkedin} />
                    </div>
                    <h2 className='footer-content-email'>informes@topquality-consulting.com</h2>
                </div>
            </section>
        </>
    )
}

export default Footer   