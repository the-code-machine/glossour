'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesCard from '../utils/ServicesCard';

interface ServicesBriefProps { }

const ServicesBrief: React.FC<ServicesBriefProps> = () => {
    const services: string[] = ['Web Development', 'E-Commerce Marketing', 'SEO', 'Social Media', 'PPC', 'Press Release', 'Graphic Designing', 'Political Campaign'];
    const ServicesInfo: any[] = [
        {
            subtitle: 'Web Development',
            title: 'Web Development',
            description: 'We build websites that are fast, secure, and easy to manage. We develop websites that are responsive, user-friendly, and SEO optimized.',
            image: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg',
            features: ['Fast', 'Secure', 'User-Friendly'],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/web-development'
        },
        {
            subtitle: 'E-Commerce Marketing',
            title: 'E-Commerce Marketing',
            description: 'We help businesses increase their online sales and revenue through our E-Commerce Marketing services. We provide services like SEO, PPC, and Social Media Marketing.',
            image: 'https://static.vecteezy.com/system/resources/previews/005/732/516/non_2x/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg',
            features: ['SEO', 'PPC', 'Social Media Marketing',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/e-commerce-marketing'
        },
        {
            subtitle: 'SEO',
            title: 'SEO',
            description: 'We help businesses increase their online visibility and organic traffic through our SEO services. We provide services like On-Page SEO, Off-Page SEO, and Technical SEO.',
            image: 'https://media.istockphoto.com/id/1385957068/photo/seo-search-engine-optimization-marketing-ranking-traffic-website-internet-business-technology.jpg?s=612x612&w=0&k=20&c=1IDmzJNcAl_ttoIIYE4AbXe98MKL02EiFs5b9hJnqrc=',
            features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/seo'
        },
        {
            subtitle: 'Social Media',
            title: 'Social Media',
            description: 'We help businesses increase their online presence and engagement through our Social Media Marketing services. We provide services like Facebook Marketing, Instagram Marketing, and LinkedIn Marketing.',
            image: 'https://img.lovepik.com/photo/48006/8205.jpg_wh860.jpg',
            features: ['Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/social-media'
        },
        {
            subtitle: 'PPC',
            title: 'PPC',
            description: 'We help businesses increase their online sales and revenue through our PPC services. We provide services like Google Ads, Bing Ads, and Facebook Ads.',
            image: 'https://img.freepik.com/premium-vector/cartoon-illustration-blue-backdrop-abstract-ppc-marketing-advertising-design_123447-2962.jpg',
            features: ['Google Ads', 'Bing Ads', 'Facebook Ads',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/ppc'
        },
        {
            subtitle: 'Press Release',
            title: 'Press Release',
            description: 'We help businesses increase their online visibility and credibility through our Press Release services. We provide services like Press Release Writing and Press Release Distribution.',
            image: 'https://media.istockphoto.com/id/469182248/photo/newspaper-with-the-headline-press-release.webp?b=1&s=170667a&w=0&k=20&c=wnDdn6NQSxUT15cF8ZIyGFYOboK-mPzAUpGIokRLqCk=',
            features: ['Press Release Writing', 'Press Release Distribution', 'Increase Visibility'],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/press-release'
        },
        {
            subtitle: 'Graphic Designing',
            title: 'Graphic Designing',
            description: 'We help businesses increase their online presence and engagement through our Graphic Designing services. We provide services like Logo Design, Banner Design, and Social Media Design.',
            image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/graphic-designer-desk.jpeg-1.jpg',
            features: ['Logo Design', 'Banner Design', 'Social Media Design',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/graphic-designing'
        },
        {
            subtitle: 'Political Campaign',
            title: 'Political Campaign',
            description: 'We help politicians increase their online visibility and engagement through our Political Campaign services. We provide services like Social Media Marketing, PPC, and Press Release.',
            image: 'https://www.research-live.com/img/online-political-ads-laptop_crop.jpg',
            features: ['Social Media Marketing', 'PPC', 'Press Release',],
            buttonText: 'LEARN MORE',
            buttonLink: '/services/political-campaign'
        },
    ]
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
                {
                    <ServicesCard subtitle={ServicesInfo[active]?.subtitle} title={ServicesInfo[active]?.title} description={ServicesInfo[active]?.description} image={ServicesInfo[active]?.image} buttonLink={ServicesInfo[active]?.buttonLink} buttonText={ServicesInfo[active]?.buttonText} features={ServicesInfo[active]?.features} />
                }

            </motion.div>
        </div>
    );
};

export default ServicesBrief;
