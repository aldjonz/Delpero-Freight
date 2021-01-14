import Nav from '../components/NavBar/nav';
import Footer from '../components/Footer/footer';
import BottomFooter from '../components/Footer/bottomFooter';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import BgImage from '../components/UI/bgImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactCard from '../components/ContactCard/contactCard';

const contact = () => {
    return (
        <div className="container">
            <Nav />
            <div className="contactContainer">
                <div className="contactForm">
                    <h1>get in touch</h1>
                    <br/>
                    <p>Haven't found what you were looking for? <br/> Let us know below or email us directly.</p>
                    <br/>
                    <form>
                        <input placeholder="Name" id="name" className="contactInput" type="text" required />
                        <br/>
                        <input placeholder="Email" id="email" className="contactInput" type="email" required/>
                        <br/>
                        <input placeholder="Subject" id="subject" className="contactInput" type="text" required/>
                        <br/>
                        <textarea placeholder="Message" id="message" className="contactInput" type="text" required/>
                        <br/>
                        <button className="formButton" type="button">Submit</button>
                    </form>    
                </div>
                <BgImage 
                    imageUrl="/images/ets2_20210106_212228_00.png"
                >
                    <div className="contactInfo">
                        <div className="contactCardContainer">
                            <ContactCard 
                                title="Email Management:"
                                email="Management@delperofreight.com"
                                icon={ faPaperPlane }
                            />
                            <ContactCard 
                                title="Have a Query?"
                                email="support@delperofreight.com"
                                icon={ faEnvelope }
                            />
                        </div>
                        <SocialMediaLinks 
                            backgroundStyle="none"
                        />
                    </div>
                </BgImage>
            </div>
            <Footer />
            <BottomFooter />
        </div>
    )
};

export default contact;