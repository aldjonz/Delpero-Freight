import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import NavLink from './desktopNavLink';

const desktopNav = () => {
    const [navBackground, setNavBackground] = useState('auto');

    const colourBackground = () => {
        setNavBackground('rgba(255,255,255,0.9)');
    };
    const clearBackground = () => {
        setNavBackground('rgba(255,255,255,0)');
    }
    const handleScroll = () => {
        
    }

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > window.innerHeight) {
                colourBackground();
            } else if(window.scrollY < window.innerHeight) {
                clearBackground();
            }
        }
        return function cleanup() {
            window.onscroll()
        }
    });

    return (
        <motion.nav 
            animate={{
                opacity: 1
            }}
            transition={{ duration: 1.6 }}
            className="desktopNav" 
            style={{ backgroundColor: navBackground }}
        >
            <div className="coralBorderTop"></div>
            <div className="navLeft">
                <Link href="/"><img src="/logo/delpero_plain_long_transparent.png" alt="Logo" /></Link>
            </div>
            <div className="navRight">
                <ul>
                    <NavLink href="/"  className="desktopNavElLink"><li className="navBtn desktopNavEl">Home</li></NavLink>
                    <NavLink href="/about"  className="desktopNavElLink"><li className="navBtn desktopNavEl">About</li></NavLink>
                    <NavLink href="/apply"  className="desktopNavElLink"><li className="navBtn desktopNavEl">Apply</li></NavLink>
                    <NavLink href="/contact"  className="desktopNavElLink"><li className="navBtn desktopNavEl">Contact</li></NavLink>
                    {/* <Link className="desktopNavElLink" href="/"><li className="navBtn desktopNavEl">Home</li></Link>
                    <Link href="/about"><li className="desktopNavEl">About</li></Link>
                    <Link href="/apply"><li className="desktopNavEl">Apply</li></Link>
                    <Link href="/contact"><li className="desktopNavEl">Contact</li></Link> */}
                    <li className="desktopNavEl driversCore"><a target="_blank" href="https://DriversCore.app">Drivers Core</a></li>
                </ul>
            </div>
        </motion.nav>
    )
};

export default desktopNav;