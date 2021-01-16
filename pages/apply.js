import Layout from '../components/layout';

import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';
import InternalButton from '../components/UI/Buttons/internalButton';
import ExternalButton from '../components/UI/Buttons/externalButton';
import BgImage from '../components/UI/bgImage';
import InfoListElement from '../components/UI/infoListElement';

const apply = () => {
    return (
        <Layout>
            <div className="applyHeaderImageContainer">
            </div>
            <div 
                className="applyHeaderTextContainer"
                data-aos="fade-right"
                data-aos-delay="1200"
            >
                <h1>apply</h1>
                <p>Start working for Delpero Freight</p>
                <InternalButton 
                    text="Start Today"
                    className="mainButton mainButtonWhite"
                    link="#applyRequirements"
                />
            </div>
            <div id="applyRequirements" className="applyRequirementsContainer">
                <div className="applyTitle">
                    <h1>your journey starts here</h1>
                </div>
                <div className="applyRequirements">
                    <div data-aos="fade-right"  data-aos-delay="0" className="requirementsText ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
                    </div>
                    <div data-aos="fade-left"  data-aos-delay="400" className="requirementsText">
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
                    <div className="requirementsVid" data-aos="zoom-in">      
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rJagXatH_Uo?controls=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                        scrollAnimation="fade-up-right"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="rightInfoText infoText"
                        borderColor="#0AA0FF"
                        scrollAnimation="fade-up-left"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="leftInfoText infoText"
                        borderColor="#0AA0FF"
                        scrollAnimation="fade-up-right"
                    />
                    <InfoListElement 
                        title="Lorem Ipsum"
                        infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        className="rightInfoText infoText"
                        borderColor="#0AA0FF"
                        scrollAnimation="fade-up-left"
                    />
                </div>
            </div>
            <SocialMediaLinks 
                backgroundStyle="auto"
            />
        </Layout>
    )
};

export default apply;