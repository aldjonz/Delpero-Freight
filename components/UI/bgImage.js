const bgImage = (props) => (
    <div className="bgImageContainer" style={{ backgroundImage: `url(${props.imageUrl})` }}>
        <div className="colourOverlay">
            {props.children}
        </div>
    </div>
);

export default bgImage;