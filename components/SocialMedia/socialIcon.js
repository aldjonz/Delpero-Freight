import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const socialIcon = (props) => (
    <div className="iconRound">
        <FontAwesomeIcon icon={props.icon} />
    </div>
);

export default socialIcon;