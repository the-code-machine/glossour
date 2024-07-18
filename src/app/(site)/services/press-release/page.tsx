'use client'
import Section8 from '@/components/services/Section8';
import Carusal from '@/components/utils/Carausal';
import RequestModal from '@/components/utils/Form/RequsetQuote';
import { motion, } from 'framer-motion';
import { FC, useState } from 'react';
import { useInView } from 'react-intersection-observer'
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PressRelease: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

    return (
        <div className="">
            <div className="container xl:px-40 lg:px-10 md:px-8 px-4 py-40">
                <div className="text-center pb-20">
                    <p className="text-sm font-bold tracking-[7px] leading-tight text-white uppercase">Press Release</p>
                    <h1 className="md:text-4xl lg:text-5xl text-3xl xl:text-6xl font-extrabold text-tertiary-200 leading-[48px] lg:leading-[72.8px] mb-2 mt-2">OUR PRESS RELEASE SERVICES</h1>
                    <p className="md:text-2xl text-sm md:leading-[34px] text-paragraph-200 font-normal mb-8">
                        Explore our comprehensive press release services designed to amplify your brands message and reach your target audience effectively.
                    </p>
                    <div className="flex justify-center">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-tertiary-200 text-white rounded-sm p-3 font-bold f-f-DM uppercase">Request free quote</button>
                    </div>
                </div>
                <Carusal />

                <div ref={ref} className="mt-20">
                    <h2 className="xl:text-5xl lg:text-4xl text-3xl font-bold text-tertiary-200 mb-10 text-center">Our Press Release Services</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Standard Press Releases</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Reach media outlets and industry publications with concise and impactful standard press releases.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">SEO-Optimized Press Releases</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Enhance online visibility and search engine rankings with press releases optimized for SEO keywords and phrases.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Media Relations</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Build relationships with journalists and media influencers to secure coverage and maximize exposure for your brand.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Event Press Releases</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Promote your events effectively with targeted event press releases that attract attendees and media attention.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Crisis Management</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Handle critical situations effectively with crisis management press releases that protect your brands reputation.
                            </p>
                        </motion.div>
                        <motion.div whileHover={{ translateY: -10 }} transition={{ duration: 0.3 }} className="space-y-5 p-6 flex flex-col justify-center items-center border-2 rounded-3xl border-tertiary-200 bg-card-gradient" variants={cardVariants}>
                            <h3 className="text-3xl font-semibold text-white mb-2">Product Launches</h3>
                            <p className="text-lg leading-relaxed text-center text-paragraph-200">
                                Generate buzz and excitement around new products or services with impactful product launch press releases.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <RequestModal isOpen={isOpen} setIsOpen={setIsOpen} title='Press Release' />
            <Section8 />
        </div>

    );
};

export default PressRelease;
