'use client'
import React from 'react';

interface HeroSectionProps { }

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className=' w-full flex justify-center items-center  bg-secondary-200  h-[90vh] px-64 space-x-15'>
            <div className=' w-full flex flex-col justify-start '>
                <h1 style={{ lineHeight: 1 }} className='text-[4.5rem] font-bold text-white'>MARKETING & PROMOTION</h1>
                <div className=' px-3 py-2 border border-tertiary-200  text-white w-[97%]  font-light text-[20px] rounded-md my-5'>
                    Cutting-Edge Strategies, One Click Away.                </div>
                <p className=' text-paragraph-200 font-light text-lg'>
                    Transforming Your Online Presence with Tailored, Agile Marketing Solutions
                </p>
            </div>
            <div className='w-full justify-end items-center flex'>
                <img src='/images/hero.svg' className=' object-contain w-11/12' />
            </div>

        </div>
    );
};

export default HeroSection;