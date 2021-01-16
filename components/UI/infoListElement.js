const infoList = (props) => (
        <div data-aos={props.scrollAnimation} className={props.className}>
            <h2 style={{ borderColor: props.borderColor }}>{props.title}</h2>
            <h3>{props.infoText}</h3>
        </div>
);

export default infoList;