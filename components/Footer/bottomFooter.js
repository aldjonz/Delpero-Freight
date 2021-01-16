const bottomFooter = () => {
    let d = new Date();
    let currentYear = d.getFullYear();

    return (
        <div className="copyright">
            <h4>©{currentYear}, Delpero Freight VTC.</h4>
            <h4>Website built by <a href="">A. Jones</a></h4>
        </div>
    );
}

export default bottomFooter;