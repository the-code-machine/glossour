'use client'
import Link from 'next/link';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
interface WhatsAppProps {
}

const WhatsApp: React.FC<WhatsAppProps> = ({ }) => {
    return (
        <>

            <Link href="https://wa.me/918818828823" className=" rounded-full  bg-[#26C943] border-tertiary-200 border flex justify-center items-center fixed w-14 h-14 bottom-5 right-5  md:bottom-10  z-[100] md:right-10" target="_blank">
                <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>  <FaWhatsapp color='#fff' size={35} /></motion.div>
            </Link>
        </>
    );
};
export default WhatsApp;