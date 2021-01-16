const footer = () => (
    <div className="footer">
        <div className="footerCol footerTitle">
            <h1 className="footerText">Delpero Freight</h1>
            <h3 className="footerText">You're in Good Hands</h3>
        </div>
        <div className="footerCol footerInfo">
            <h2 className="footerText">More Info</h2>
            <div className="footerContact">
                <h3 className="footerText">Email:</h3>
                <div className="footerEmail">
                    <p><a href="mailto:support@delperofreight.com">support@delperofreight.com</a></p>
                    <p><a href="mailto:Management@delperofreight.com">Management@delperofreight.com</a></p>
                </div>
            </div>
        </div>
        {/* <div className="footerCol footerNews">
            <h2 className="footerText">Recent News</h2>

        </div> */}
    </div>
);
export default footer;