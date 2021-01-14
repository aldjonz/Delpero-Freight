import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactCard = (props) => {
    const [liftText, setLiftText] = useState('');
    const [iconIsVisible, setIconIsVisible] = useState('1');
    const [linkIsVisible, setLinkIsVisible] = useState('0');
    const [moveLink, setMoveLink] = useState('1');

    const raiseContent = () => {
        setLiftText('-40px');
        setIconIsVisible('0');
        setLinkIsVisible('1');
    };
    const lowerContent = () => {
        setLiftText('0px');
        setIconIsVisible('1');
        setLinkIsVisible('0');
    };
    const growLink = () => {
            setMoveLink('1.2');
    };
    const shrinkLink = () => {
        setMoveLink('1');
    };

    return(
        <div className="contactCard" onClick={iconIsVisible === '1' ?  raiseContent : lowerContent } onMouseEnter={raiseContent} onMouseLeave={lowerContent}>
            <div className="cardContentWrapper" style={{ transform: `translateY(${liftText})` }} >
                <FontAwesomeIcon className="cardIcon" icon={props.icon} style={{ opacity: iconIsVisible }} />
                <h2>{props.title}</h2>
                <p>{props.email}</p>
                <p 
                    style={{ opacity: linkIsVisible, transform: `scale(${moveLink})` }} 
                    className="emailButton"
                    onMouseEnter={growLink}
                    onMouseLeave={shrinkLink}
                ><a href={"mailto:" + props.email}> EMAIL NOW</a></p>
            </div>
        </div>
    );
};

export default contactCard;