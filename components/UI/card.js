import BgImage from './bgImage';

const card = (props) => (
    <div className="card">
        <h2>{props.title}</h2>
        <div className="cardImg">
            {props.img}
        </div>
        <p>{props.text}</p>
    </div>
);

export default card;