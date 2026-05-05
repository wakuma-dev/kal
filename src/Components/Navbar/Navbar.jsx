import React from 'react';
import Logo from './Logo'
import NavMenu from './NavMenu';
import Cta from './Cta';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    return(
        <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 md:px-12 lg:px-20">
         <Logo />
         <div className="flex items-center gap-4">
            <NavMenu />
            <Cta />
         </div>
         <MobileMenu />
        </div>
    )
}