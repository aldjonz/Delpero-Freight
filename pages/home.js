import React, { useEffect } from 'react';

import InternalButton from '../components/UI/Buttons/internalButton';
import BgImage from '../components/UI/bgImage';
import InfoListElement from '../components/UI/infoListElement';

const home = () => {

    return (
        <div>
            <div className="welcomeImage">
                <div className="homeHeaderImageContainer" >
                </div>
                <div 
                    className="homeHeaderTextContainer"
                    data-aos="fade-right"
                    data-aos-delay="1200"
                >
                    <h1>you're in good hands</h1>
                    <p>Start driving for Delpero Freight, a Virtual Trucking Company with an intention of innovation and expansion that resonates globally.</p>
                    <InternalButton 
                        text="Apply"
                        className="mainButton mainButtonWhite"
                        link="/apply"
                    />
                </div>
            </div>
            <div className="homeInfo">
                <div className="homeInfoTextContainer">
                    <div data-aos="fade-right" className="homeInfoText">
                        <p >Delpero Freight is a Virtual Trucking Company for the popular games Euro Truck Simulator
                            2 & American Truck Simulator. We intend to change the stereotype when it comes to
                            immers`ion, innovation & participation.</p>
                        <InternalButton 
                            text="Discover" 
                            className="mainButton mainButtonBlue"
                            link="/about"
                        />
                    </div> 
                </div>
                <div className="ytVideo">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rJagXatH_Uo?controls=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
            <div className="unique">
                <BgImage
                    imageUrl="/images/ets2_20210105_010633_00.png"
                >
                    
                        <h1>What makes Delpero Freight unique?</h1>
                        <div aos-data="fade-left" className="infoHolder">
                            <InfoListElement 
                                title="Lorem Ipsum"
                                infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                                className="leftInfoText infoText"
                                borderColor="#ccc"
                                scrollAnimation="fade-up-right"
                            />
                            <InfoListElement 
                                title="Lorem Ipsum"
                                infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                                className="rightInfoText infoText"
                                borderColor="#ccc"
                                scrollAnimation="fade-up-left"
                            />
                            <InfoListElement 
                                title="Lorem Ipsum"
                                infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                                className="leftInfoText infoText"
                                borderColor="#ccc"
                                scrollAnimation="fade-up-right"
                            />
                            <InfoListElement 
                                title="Lorem Ipsum"
                                infoText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                                className="rightInfoText infoText"
                                borderColor="#ccc"
                                scrollAnimation="fade-up-left"
                            />
                        </div>
                </BgImage>
            </div>
            <div data-aos="fade">
                <img className="homeBottomImg" src="/images/ets2_20210107_005935_00.png" alt="Truck" />
                <div className="bottomImgTextWrapper">
                    <h1>our roots make us</h1>
                    <InternalButton 
                        text="Start Here"
                        className="mainButton mainButtonWhite"
                        link="/about"
                    />
                </div>
            </div>
        </div>
    )
};

export default home;