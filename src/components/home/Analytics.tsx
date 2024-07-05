'use client'
import React from 'react'
import { FaChartLine, FaBullhorn, FaRocket, FaUsers, FaGlobe, FaHandsHelping, FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Space from '../utils/Space'

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
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

export default function Analytics() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.4
    })
    return (
        <div className='w-full px-48 py-16 flex flex-col justify-center items-center'>
            <div className='flex w-full justify-between'>
                <div className='text-4xl w-2/3 text-white font-semibold'>
                    <p className='w-full'>
                        Data-Driven Insights for Your Digital Marketing</p>
                </div>
                <div className='1/3 text-paragraph-200 text-xs font-normal flex justify-center items-center'>
                    <p className='w-4/5'>
                        Gain valuable insights from your website, web app, or mobile app analytics to enhance your marketing strategies. Harness the power of data to make informed decisions and stay ahead in the competitive market.

</p>
                </div>
            </div>

            <motion.div
                className='grid grid-cols-3 gap-5 w-full py-16'
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                ref={ref}
            >
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-1 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl   bg-button-gray  shadow-lg shadow-buttonGray-300  backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaChartLine color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Analytics</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>We provide comprehensive analytics to help you track and measure your marketing performance.</p>
                </motion.div>
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-2 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl  bg-button-gray  shadow-lg shadow-buttonGray-300 backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaBullhorn color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Campaigns</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>Optimize your marketing campaigns with data-driven insights and reach your target audience effectively.</p>
                </motion.div>
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-2 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl  bg-button-gray  shadow-lg shadow-buttonGray-300 backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaRocket color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Growth</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>Leverage our tools to drive growth and achieve your business objectives faster.</p>
                </motion.div>
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-1 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl  bg-button-gray  shadow-lg shadow-buttonGray-300 backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaUsers color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Audience</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>Understand your audience better with in-depth analytics and tailor your strategies to their needs.</p>
                </motion.div>
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-1 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl  bg-button-gray  shadow-lg shadow-buttonGray-300 backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaGlobe color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Global Reach</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>Expand your global reach with our data-driven marketing strategies and tools.</p>
                </motion.div>
                <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className='space-y-5 col-span-2 p-12 flex flex-col border-2 justify-center items-center rounded-3xl border-tertiary-200 bg-card-gradient' variants={cardVariants}>
                    <div className='rounded-2xl  bg-button-gray  shadow-lg shadow-buttonGray-300 backdrop-blur-sm backdrop-filter p-6 flex justify-center items-center'>
                        <FaHandsHelping color='#ffffff' size={26} />
                    </div>
                    <h1 className='text-white text-xl font-semibold'>Support</h1>
                    <p className='text-paragraph-200 font-normal text-xs text-center'>We provide exceptional support to help you navigate and optimize your marketing efforts.</p>
                </motion.div>
            </motion.div>

            <Space h={16} />

            <motion.div ref={ref2} initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                variants={containerVariants} className=" w-full flex space-x-10 py-10 justify-center items-center">
                <motion.div variants={cardVariants} className="w-full rounded-lg flex flex-col justify-start items-start h-full">
                    <h2 className="text-4xl  font-bold mb-4 text-white">Discover the potential of Our drive growth</h2>
                    <p className="mb-4 text-paragraph-200 text-sm">Page users the foundationally powers of our 40 unique call centers to proactively drive growth but also inspire change. With your fingertips, businesses can... </p>
                    <button className=' bg-button-gradient rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5  justify-center font-normal items-center text-sm '><span>EXPLORE MORE</span><span className=' ml-2'><img src='/icons/right-arrow.svg' /></span></button>
                </motion.div>
                <motion.div variants={cardVariants} className=" w-full">
                    <img src="https://via.placeholder.com/300" alt="Team Image" className="rounded-lg w-full h-96" />

                </motion.div>
            </motion.div>

            <Space h={16} />
            <motion.div ref={ref3} initial="hidden"
                animate={inView3 ? "visible" : "hidden"}
                variants={containerVariants} className=" w-full flex space-x-10 py-10 justify-center items-center">
                <motion.div variants={cardVariants} className=" w-full">
                    <img src="https://via.placeholder.com/300" alt="Team Image" className="rounded-lg w-full h-96" />

                </motion.div>
                <motion.div variants={cardVariants} className="w-full rounded-lg flex flex-col justify-start items-start h-full">
                    <p className=' text-paragraph-200 text-xs my-1'>SOFTWARE SOLUTION</p>
                    <h2 className="text-4xl  font-bold mb-4 text-white">Creating success using cutting-edge software</h2>
                    <p className="mb-4 text-paragraph-200 text-sm">Page users the foundationally powers of our 40 unique call centers to proactively drive growth but also inspire change. With your fingertips, businesses can... </p>
                    <ul className=' grid md:grid-cols-2 grid-cols-1 gap-3 mb-5'>
                        <li className='font-light flex justify-start items-center text-white  '> <span className=' rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>Scaliblity and Adaptiblity</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>Relaiblity and Performance</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>Continuous Innovationn</li>
                        <li className='font-light flex justify-start items-center text-white'> <span className=' rounded-full p-1 border-tertiary-200 border-2 mr-3'><FaCheck color='#251DB5' size={10} /></span>Innovative Features</li>
                    </ul>
                    <button className=' bg-button-gradient rounded-md text-white flex border-tertiary-200 border-2 px-3 py-1.5  justify-center font-normal items-center text-sm '><span>DISCOVER NOW</span><span className=' ml-2'><img src='/icons/right-arrow.svg' /></span></button>
                </motion.div>

            </motion.div>
        </div>
    )
}



