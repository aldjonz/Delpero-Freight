import Layout from '../components/layout';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import BgImage from '../components/UI/bgImage';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ContactCard from '../components/ContactCard/contactCard';

const contact = () => {
    return (
        <Layout>
            {/* <Nav /> */}
            <div className="contactContainer">
                <div className="contactForm">
                    <h1>get in touch</h1>
                    <br/>
                    <p data-aos="fade-down">Haven't found what you were looking for? <br/> Let us know below or email us directly.</p>
                    <br/>
                    <form>
                        <div data-aos="fade-up" data-aos-delay="350">
                            <input placeholder="Name" id="name" className="contactInput" type="text" required />
                        </div>
                        <br/>
                        <div data-aos="fade-up" data-aos-delay="700">
                            <input placeholder="Email" id="email" className="contactInput" type="email" required/>
                        </div>
                        <br/>
                        <div data-aos="fade-up" data-aos-delay="1050">
                            <input placeholder="Subject" id="subject" className="contactInput" type="text" required/>
                        </div>
                        <br/>
                        <div data-aos="fade-up" data-aos-delay="1400">
                            <textarea placeholder="Message" id="message" className="contactInput" type="text" required/>
                        </div>
                        <br/>
                        <div data-aos="fade-up" data-aos-delay="1750">
                            <button className="formButton" type="button">Submit</button>
                        </div>
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
            {/* <Footer />
            <BottomFooter /> */}
        </Layout>
    )
};

export default contact;