import Layout from '../components/layout';

import MemberIcon from '../components/Team/teamMemberIcon';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import BgImage from '../components/UI/bgImage';
import InternalButton from '../components/UI/Buttons/internalButton';

const about = () => {
    return (
        <Layout>
            <div className="aboutHeaderImageContainer">
            </div>
            <div 
                className="aboutHeaderTextContainer"
                data-aos="fade-right"
                data-aos-delay="1200"
            >
                <h1>about us</h1>
                <p>Learn more about Delpero Freight</p>
                <InternalButton 
                    text="Learn More"
                    className="mainButton mainButtonWhite"
                    link="#aboutTextContainer"
                />
            </div>
            <div className="aboutInfoContainer">
                    <BgImage 
                        imageUrl="/images/ets2_20210103_005913_00.png"
                    >
                        <div id="aboutTextContainer" className="aboutTextContainer">
                            <div data-aos="zoom-in" className="aboutText">
                                <h1>discover a new way of trucking</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <img data-aos="flip-down" className="aboutImg" src="/images/ets2_20210105_013502_00.png" alt="truck" />
                        </div>
                    </BgImage>
                <div>
                    <div className="roadMapContainer">
                        <div data-aos="zoom-out-left" className="roadMapTitleContainer">
                            <h1>the future of virtual trucking</h1>
                            <InternalButton 
                                text="Join Today"
                                className="mainButton mainButtonBlue"
                                link="/apply"
                            />
                        </div>
                        <img data-aos="zoom-in" className="roadMap" src="https://cdn.24slides.com/templates/upload/templates-previews/pCDw1knBWA0jCkRujgECn2jCw0PGwOm1dgMBLYMR.png" alt="RoadMap" />
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
                                animationDelay="0"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Bob"
                                memberTitle="CTO"
                                animationDelay="200"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Kay"
                                memberTitle="COO"
                                animationDelay="400"
                            />
                            <MemberIcon 
                                image="https://icon-library.com/images/user-profile-icon/user-profile-icon-6.jpg"
                                memberName="Mike"
                                memberTitle="HR"
                                animationDelay="600"
                            />
                        </div>
                    </div>
                </BgImage>
            </div>
            <SocialMediaLinks 
                backgroundStyle="none"
            />
        </Layout>
    )
};

export default about;