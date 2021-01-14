const externalButton = (props) => (
    <a target="_blank" href={props.link}><button className={props.className}>{props.text}</button></a>
);

export default externalButton;