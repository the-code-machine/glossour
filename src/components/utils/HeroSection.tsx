'use client'
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import Reveal from "./Reveal";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 1,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
            }}
            className="container flex justify-center items-center     xl:px-64 lg:px-20 md:px-8  bg-gray-950 px-4  xl:py-48 lg:py-36 md:py-28 py-36   xl:space-x-15 text-gray-200"
        >
            <div className=' w-full flex flex-col justify-start '>
                <Reveal width='100%'>  <h1 style={{ lineHeight: 1 }} className='xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] text-[2.5rem] font-bold  text-white'>MARKETING & PROMOTION</h1></Reveal>
                <Reveal width='100%'> <div className=' px-3 py-2 border border-tertiary-200  text-white xl:w-[97%] lg:w-[87%] md:w-[80%] w-[100%]  font-light xl:text-[20px]  text-sm rounded-md my-5'>
                    Cutting-Edge Strategies, One Click Away.                </div></Reveal>
                <Reveal width='100%'> <p className=' text-paragraph-200 font-light xl:text-lg  text-sm'>
                    Transforming Your Online Presence with Tailored, Agile Marketing Solutions
                </p></Reveal>
            </div>
            <div className='w-full justify-end items-center md:flex hidden'>
                <img src='/images/hero.svg' className=' object-contain w-11/12' />
            </div>

            {/* <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                </Canvas>
            </div> */}
        </motion.section>
    );
};