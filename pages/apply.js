import { motion } from 'framer-motion';

import Nav from '../components/NavBar/nav';
import Footer from '../components/Footer/footer';
import BottomFooter from '../components/Footer/bottomFooter';
import InternalButton from '../components/UI/Buttons/internalButton';
import ExternalButton from '../components/UI/Buttons/externalButton';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import BgImage from '../components/UI/bgImage';
import InfoListElement from '../components/UI/infoListElement';

const apply = () => {
    return (
        <div className="container">
            <Nav />
            <div className="applyHeaderImageContainer">
            </div>
            <motion.div 
                className="applyHeaderTextContainer"
                initial={{ 
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    x: [-100, 0]
                }}
                transition={{ 
                    duration: 1.4, 
                    delay: 1.2 
                }}
            >
                <h1>apply</h1>
                <p>Start working for Delpero Freight</p>
                <InternalButton 
                    text="Start Today"
                    className="mainButton mainButtonWhite"
                    link="#applyRequirements"
                />
            </motion.div>
            <div id="applyRequirements" className="applyRequirementsContainer">
                <div className="applyTitle">
                    <h1>your journey starts here</h1>
                </div>
                <div className="applyRequirements">
                    <div className="requirementsText ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
                    </div>
                    <div className="requirementsText">
                            <div className="requirementsList">
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Consectetur adipiscing elit.</li>
                                    <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Sit amet facilisis magna.</li>
                                </ul>
                                <ExternalButton 
                                    text="Apply"  
                                    className="mainButton mainButtonBlue"
                                    link="https://driverscore.app/defaultsite"
                                />
                            </div>
                    </div>
                </div>
            </div>
            <div className="requirementsVidWrapper">
                <BgImage 
                        imageUrl="/images/ets2_20210107_005935_00.png"
                    >
                    <div className="requirementsVid">      
                        <iframe width="90%" height="100%" src="https://www.youtube.com/embed/rJagXatH_Uo?controls=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </BgImage>
            </div>
            <div className="joiningReason">
                <h1>reasons to join</h1>
                <div className="infoHolder">
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="leftInfoText infoText"
                        borderColor="#0AA0FF"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="rightInfoText infoText"
                        borderColor="#0AA0FF"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="leftInfoText infoText"
                        borderColor="#0AA0FF"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="rightInfoText infoText"
                        borderColor="#0AA0FF"
                    />
                </div>
            </div>
            <SocialMediaLinks 
                backgroundStyle="auto"
            />
            <Footer />
            <BottomFooter />
        </div>
    )
};

export default apply;