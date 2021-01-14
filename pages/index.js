import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Nav from '../components/NavBar/nav';
import Footer from '../components/Footer/footer';
import BottomFooter from '../components/Footer/bottomFooter';
import HomePage from './home';
import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';

export default function Home() {
  return (
    <div className="container">
      <Nav />
      <HomePage />
      <SocialMediaLinks 
        backgroundStyle="none"
      />
      <Footer />
      <BottomFooter />
    </div>

  )
}