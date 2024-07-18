'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function TrustedBy() {
    const variants = {
        intial: {
            opacity: 0,
            y: 100
        },
        animate: (e: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1 * e

            }
        })
    }
    return (
        <div className=' w-full  grid md:grid-cols-7 grid-cols-2 justify-center items-center    md:py-20 gap-6 py-10'>
            {
                [1, 2, 3, 4, 5, 3, 2].map((item, index) => (
                    <motion.div variants={variants} initial="intial" whileInView="animate" custom={index} key={index} className='flex justify-center items-center   '>
                        <div>
                            <img src={`/trustedby/${item}.svg`} alt="trusted by" className='w-20 h-20' />
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}
