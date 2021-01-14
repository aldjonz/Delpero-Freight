import React, { useState } from 'react';

import MediaIcon from './socialIconSpan';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = (props) => {
    const [backgroundIsPresent, setBackgroundIsPresent] = useState(props.backgroundStyle);

    return (
        <div className="socialIconsContainer" style={{ backgroundImage: props.backgroundStyle }}>
            <div className="colourOverlay" style={{ background: props.backgroundStyle }}>
                <div className="socialIcons">
                    <MediaIcon 
                        link="https://www.facebook.com/DelperoFreight/"
                        icon={ faFacebookF }
                        media="facebook"
                    />
                    <MediaIcon 
                        link="https://twitter.com/delperofreight"
                        icon={ faTwitter }
                        media="twitter"
                    />
                    <MediaIcon 
                        link="https://www.instagram.com/delperofreight/"
                        icon={ faInstagram }
                        media="instagram"
                    />
                    <MediaIcon 
                        link="https://www.youtube.com/channel/UC4DCMESsVlcAiCU5Y1jQMwA/featured?view_as=subscriber"
                        icon={ faYoutube }
                        media="youTube"
                    />
                </div>
            </div>
        </div>
    );
};

export default socialMediaLinks;