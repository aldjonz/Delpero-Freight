const teamMemberIcon = (props) => (
    <div 
        data-aos="fade-up"
        data-aos-delay={props.animationDelay}
        className="memberIcon"
    >
        <div >
            <img className="memberImage" src={props.image} alt={props.memberName} />
        </div>
        <div className="memberDetails">
            <h2>{props.memberName}</h2>
            <p>{props.memberTitle}</p>
        </div>
    </div>
);

export default teamMemberIcon;