'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesCard from '../utils/ServicesCard';

interface ServicesBriefProps { }

const ServicesBrief: React.FC<ServicesBriefProps> = () => {
    const services: string[] = ['Web Development', 'Digital Marketing', 'SEO'];
    const [active, setActive] = useState<number>(0);
    const [dimensions, setDimensions] = useState<{ width: number; left: number }>({ width: 0, left: 0 });

    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        if (buttonsRef.current[active]) {
            const { offsetWidth, offsetLeft } = buttonsRef.current[active]!;
            setDimensions({ width: offsetWidth, left: offsetLeft });
        }
    }, [active]);

    return (
        <div className='w-full xl:px-48 md:px-8 lg:px-20 px-4'>
            <div className='relative w-full p-2 flex border border-paragraph-200 rounded-md'>
                <motion.div
                    className="absolute top-2 h-10 bg-tertiary-200 rounded-md"
                    initial={false}
                    animate={{ width: dimensions.width, left: dimensions.left }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
                {services.map((service, index) => (
                    <button
                        key={index}
                        onClick={() => setActive(index)}
                        ref={(el: HTMLButtonElement | null) => {
                            buttonsRef.current[index] = el;
                        }}
                        className={`relative z-10 flex justify-center rounded-md transition-all items-center px-4 py-2 text-white ${active === index ? 'bg-transparent' : ''}`}
                    >
                        {service}
                    </button>
                ))}
            </div>
            <motion.div className='py-5 w-full'>
                {active == 0 &&
                    <ServicesCard />
                }
                {active == 1 &&
                    <ServicesCard />
                }

            </motion.div>
        </div>
    );
};

export default ServicesBrief;
