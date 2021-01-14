import '../styles/globals.css';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/apply.css';
import '../styles/contact.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
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
