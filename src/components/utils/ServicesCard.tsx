'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
const cardVariants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    }
}

const containerVariants = {
    hidden: {
        opacity: 1,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

interface ServicesCardProps {
    subtitle: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ subtitle, title, description, image, features, buttonLink, buttonText }) => {
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <div>
            <motion.div ref={ref3} initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={containerVariants} className=" w-full flex space-x-10 py-10 justify-center items-center">

                <motion.div variants={cardVariants} className="w-full rounded-lg flex flex-col justify-start items-start h-full">

                    <h2 className="text-4xl  font-bold mb-4 text-white">{title}</h2>
                    <p className="mb-4 text-paragraph-200 text-sm">{description}</p>
                    <ul className=' grid  grid-cols-1 gap-3 mb-5'>
                        {
                            features.map((feature, index) => (<li className='font-light flex justify-start items-center text-white  text-sm '> <span className=' rounded-full p-0.5 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={8} /></span>{feature}</li>))
                        }


                    </ul>
                    <Link href={buttonLink}>   <button className=' bg-button-gradient mt-8 rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5  justify-center font-normal items-center text-sm '><span>{buttonText}</span><span className=' ml-2'><img src='/icons/right-arrow.svg' /></span></button></Link>
                </motion.div>
                <motion.div variants={cardVariants} className=" w-full">
                    <img src={image} alt="Team Image" className="rounded-lg w-full h-96" />

                </motion.div>
            </motion.div>
        </div>
    );
};
export default ServicesCard;