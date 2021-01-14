import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SocialIcon from './socialIcon';

const socialIcon = (props) => (
    <div id={props.media}>
        <a target="_blank" href={props.link} className="buttonRound">
            <SocialIcon 
                icon={props.icon}
            />
            <span>{props.media}</span>
        </a>
    </div>
);

export default socialIcon;