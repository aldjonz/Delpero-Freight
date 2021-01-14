import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const mobileNav = () => {
    const [displayNav, setDisplayNav] = useState('0');
    const [navBackground, setNavBackground] = useState("auto");

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if(window.scrollY > window.innerHeight) {
                setNavBackground('rgba(255,255,255,0.65');
            } else if(window.scrollY < window.innerHeight) {
                setNavBackground('rgba(255,255,255,0');
            }
        })
    })

    const toggleNav = () => {

        if(displayNav === '1') {
            setDisplayNav('0');
            setNavBackground('rgba(255,255,255,0');
        } else if(displayNav === '0') {
            setDisplayNav('1');
            setNavBackground('rgba(255,255,255,0.65');
        }
    }

    const closeNav = () => {
        if(displayNav === '1') {
            setDisplayNav('0');
            setNavBackground('rgba(255,255,255,0');
        }
    }

    return (
        <div tabIndex="1" onBlur={closeNav} className="mobileNavContainer" style={{ height: '100%' }} onClick={closeNav}>
            <div className="mobileNavHeader" style={{ backgroundColor: navBackground }}>
                <img src="/logo/delpero_plain_transparent_short.png" alt="Logo" />
                <FontAwesomeIcon onClick={ toggleNav } className="navIcon" icon={displayNav === '1' ? faTimes : faBars} />
            </div>
            <nav style={{ transform: `scale(${displayNav})`, backgroundColor: navBackground }} className="mobileNav">
                <div className="mobileNavEl"><Link href="/">Home</Link></div>
                <div className="mobileNavEl"><Link href="/about">About</Link></div>
                <div className="mobileNavEl"><Link href="/apply">Apply</Link></div>
                <div className="mobileNavEl"><Link href="/contact">Contact</Link></div>
                <div className="mobileNavEl driversCore"><a target="_blank" href="https://DriversCore.app">Drivers Core</a></div>
            </nav>
        </div>
    )
};

export default mobileNav;