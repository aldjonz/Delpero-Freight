import Layout from '../components/layout';
import HomePage from './home';

import SocialMediaLinks from '../components/SocialMedia/socialMediaLinks';

export default function Home() {
  return (
    <Layout>
      <HomePage />
      <SocialMediaLinks 
          backgroundStyle="none"
      />
    </Layout>

  )
}