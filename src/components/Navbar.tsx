'use client'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Tabs } from './utils/Dropdown';

interface NavbarProps {
}

const navigation: any[] = [
    {
        title: 'HOME', href: '/'
    },
    {
        title: 'ABOUT', href: '/about'
    },
    {
        title: 'SERVICES', href: '/services'
    },
    {
        title: 'CONTACT', href: '/contact'
    },
    {
        title: 'HELP', href: '/help'
    },

]
const Navbar: React.FC<NavbarProps> = ({ }) => {
    const [path, setPath] = useState('');



    return (
        <nav className=' xl:max-w-5xl lg:max-w-lg md:max-w-md  z-[100] backdrop-blur-md backdrop-filter bg-opacity-30 bg-secondary-300    sm:max-w-sm  max-w-xs top-5  fixed rounded-2xl   border-tertiary-200 border-2   right-0 left-0 mx-auto  p-3 text-[14px]  font-medium  justify-between items-center    text-white flex space-x-3'>

            <div className=' flex justify-start  items-center'>
                <Link href={'/'}>
                    <button className=' px-3 py-1.5  transition-all   text-lg font-semibold '><img src='/logo/brand.jpg' className='w-6 h-full' /></button>
                </Link>
                <Tabs />
            </div>
            <Link href={'/'}>
                <button className=' px-3 py-1.5 rounded  border-[#807cd4] text-xs   bg-button-gradient border transition-all  justify-start items-center text-white font-normal flex  '><span className=' mr-6'><img src='/icons/right-arrow.svg' /></span>get in touch</button>
            </Link>
        </nav>
    );
};
export default Navbar;