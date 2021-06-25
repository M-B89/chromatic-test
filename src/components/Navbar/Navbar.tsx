import React from 'react';
import Link from '../Link/Link';
import {motion} from "framer-motion";

const Navbar = () => {
    return (
            <motion.nav
                    initial={{y: -200, opacity: .8}}
                    animate={{y: 0, opacity: 1}}
                    className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
                    role='navigation'>
                <a href='/' className='pl-8'>
                    Logo
                </a>
                <div className='px-4 cursor-pointer md:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                </div>
                <div className='pr-8 md:block hidden text-base font-bold'>
                    <Link classNames='p-4' text="Home" url='/'/>
                    <Link classNames='p-4' text="Menu" url='/menu'/>
                    <Link classNames='p-4' text="About" url='/about'/>
                    <Link classNames='p-4' text="Contact" url='/contact'/>
                </div>
            </motion.nav>
    )
}

export default Navbar;
