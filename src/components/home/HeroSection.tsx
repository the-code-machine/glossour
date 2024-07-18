'use client'
import React from 'react';

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className=' container flex justify-center items-center xl:px-64 lg:px-20 md:px-8 px-4 bg-secondary-200  xl:py-48 lg:py-36 md:py-28 py-36   xl:space-x-15'>
            <div className=' w-full flex flex-col justify-start '>
                <h1 style={{ lineHeight: 1 }} className='xl:text-[4.5rem] lg:text-[3.5rem] md:text-[2.5rem] text-[2.5rem] font-bold text-white'>MARKETING & PROMOTION</h1>
                <div className=' px-3 py-2 border border-tertiary-200  text-white xl:w-[97%] lg:w-[87%] md:w-[80%] w-[100%]  font-light xl:text-[20px]  text-sm rounded-md my-5'>
                    Cutting-Edge Strategies, One Click Away.                </div>
                <p className=' text-paragraph-200 font-light xl:text-lg  text-sm'>
                    Transforming Your Online Presence with Tailored, Agile Marketing Solutions
                </p>
            </div>
            <div className='w-full justify-end items-center md:flex hidden'>
                <img src='/images/hero.svg' className=' object-contain w-11/12' />
            </div>

        </div>
    );
};

export default HeroSection;