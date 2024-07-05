'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
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
}

const ServicesCard: React.FC<ServicesCardProps> = ({ }) => {
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
                    <p className=' text-paragraph-200 text-xs my-1'>SOFTWARE SOLUTION</p>
                    <h2 className="text-4xl  font-bold mb-4 text-white">Creating success using cutting-edge software</h2>
                    <p className="mb-4 text-paragraph-200 text-sm">Page users the foundationally powers of our 40 unique call centers to proactively drive growth but also inspire change. With your fingertips, businesses can... </p>
                    <ul className=' grid md:grid-cols-2 grid-cols-1 gap-3 mb-5'>
                        <li className='font-light flex justify-start items-center text-white  '> <span className=' rounded-full p-1 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={10} /></span>Scaliblity and Adaptiblity</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={10} /></span>Relaiblity and Performance</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={10} /></span>Continuous Innovationn</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-white border-2 mr-3'><FaArrowRight color='#ffffff' size={10} /></span>Innovative Features</li>
                    </ul>
                    <button className=' bg-button-gradient rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5  justify-center font-normal items-center text-sm '><span>EXPLORE MORE</span><span className=' ml-2'><img src='/icons/right-arrow.svg' /></span></button>
                </motion.div>
                <motion.div variants={cardVariants} className=" w-full">
                    <img src="https://via.placeholder.com/300" alt="Team Image" className="rounded-lg w-full h-96" />

                </motion.div>
            </motion.div>
        </div>
    );
};
export default ServicesCard;