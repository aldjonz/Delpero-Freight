import { motion } from 'framer-motion';

import Nav from '../components/NavBar/nav';
import Footer from '../components/Footer/footer';
import BottomFooter from '../components/Footer/bottomFooter';
import MemberIcon from '../components/Team/teamMemberIcon';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import BgImage from '../components/UI/bgImage';
import InternalButton from '../components/UI/Buttons/internalButton';

const about = () => {
    return (
        <div className="container">
            <Nav />
            <div className="aboutHeaderImageContainer">
            </div>
            <motion.div 
                className="aboutHeaderTextContainer"
                initial={{ 
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    x: [-200, 30, 0]
                }}
                transition={{ duration: 1.4, delay: 1.2 }}
            >
                <h1>about us</h1>
                <p>Learn more about Delpero Freight</p>
                <InternalButton 
                    text="Learn More"
                    className="mainButton mainButtonWhite"
                    link="#aboutTextContainer"
                />
            </motion.div>
            <div className="aboutInfoContainer">
                    <BgImage 
                        imageUrl="/images/ets2_20210103_005913_00.png"
                    >
                        <div id="aboutTextContainer" className="aboutTextContainer">
                            <div className="aboutText">
                                <h1>discover a new way of trucking</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <img className="aboutImg" src="/images/ets2_20210105_013502_00.png" alt="truck" />
                        </div>
                    </BgImage>
                <div>
                    <div className="roadMapContainer">
                        <div className="roadMapTitleContainer">
                            <h1>the future of virtual trucking</h1>
                            <InternalButton 
                                text="Join Today"
                                className="mainButton mainButtonBlue"
                                link="/apply"
                            />
                        </div>
                        <img className="roadMap" src="https://cdn.24slides.com/templates/upload/templates-previews/pCDw1knBWA0jCkRujgECn2jCw0PGwOm1dgMBLYMR.png" alt="RoadMap" />
                    </div>
                </div>
            </div>
            <div className="team">
                <BgImage 
                    imageUrl="/images/ets2_20210106_204722_00.png"
                >
                    <div className="teamMemberText">
                        <h1 className="teamHeader">Meet the Team</h1>
                        <div className="memberIconSection">
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Jess"
                                memberTitle="CEO"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Bob"
                                memberTitle="CTO"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Kay"
                                memberTitle="COO"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Mike"
                                memberTitle="HR"
                            />
                        </div>
                    </div>
                </BgImage>
            </div>
            <SocialMediaLinks 
                backgroundStyle="none"
            />
            <Footer />
            <BottomFooter />
        </div>
    )
};

export default about;