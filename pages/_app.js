import React, { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { motion, AnimatePresence } from 'framer-motion';

import '../styles/globals.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/apply.css';
import '../styles/contact.css';

library.add(fab);

NProgress.configure({ showSpinner: false });
NProgress.configure({ parent: '#spinnerContainer' })

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    Aos.init({ 
        duration: 2000 
    });
    Aos.refresh();
  }, []);

  return (
    <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          opacity: 0
        }
      }}>
        <Component {...pageProps} />
      </motion.div>    
    </AnimatePresence>
  )
}

export default MyApp;
