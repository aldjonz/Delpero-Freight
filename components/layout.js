import Head from 'next/head'
import Nav from '../components/NavBar/nav'; 
import Footer from '../components/Footer/footer';
import BottomFooter from '../components/Footer/bottomFooter';
import SocialMediaLinks from './SocialMedia/socialMediaLinks';


export default function layout ({
    children,
    title = "Delpero Freight",
}) {
    return (
        <div className="container">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" /> 
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav />
            <div id="spinnerContainer"></div>
            {children}
            <Footer />
            <BottomFooter />
        </div>
    )
}