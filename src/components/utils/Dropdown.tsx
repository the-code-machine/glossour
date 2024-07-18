'use client'
import React, { useEffect, useRef, useState } from "react";
import {
    FiArrowRight,
    FiBarChart2,
    FiChevronDown,
    FiHome,
    FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
interface TabProps {
    children: React.ReactNode;
    tab: number;
    handleSetSelected: (val: number | null) => void;
    selected: number | null;
}
interface ServiceInfo {
    subtitle: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}
interface ContentProps {
    selected: number | null;
    dir: 'l' | 'r' | null;
}

interface NubProps {
    selected: number | null;
}

interface TabType {
    id: number;
    title: string;
    Component: React.FC;
}

export const Tabs: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null);
    const [dir, setDir] = useState<'l' | 'r' | null>(null);

    const handleSetSelected = (val: number | null) => {
        if (typeof selected === "number" && typeof val === "number") {
            setDir(selected > val ? "r" : "l");
        } else if (val === null) {
            setDir(null);
        }

        setSelected(val);
    };

    return (
        <div
            onMouseLeave={() => handleSetSelected(null)}
            className="relative flex md:flex-row flex-col h-fit gap-2"
        >
            {TABS.map((t) => {
                return (
                    <Tab
                        key={t.id}
                        selected={selected}
                        handleSetSelected={handleSetSelected}
                        tab={t.id}
                    >
                        {t.title}
                    </Tab>
                );
            })}

            <AnimatePresence>
                {selected !== null && <Content dir={dir} selected={selected} />}
            </AnimatePresence>
        </div>
    );
};

const Tab: React.FC<TabProps> = ({ children, tab, handleSetSelected, selected }) => {
    return (
        <button
            id={`shift-tab-${tab}`}
            onMouseEnter={() => handleSetSelected(tab)}
            onClick={() => handleSetSelected(tab)}
            className={`flex items-center gap-1 rounded-full px-2 mt-1.5  text-sm transition-colors ${selected === tab
                ? "  text-tertiary-200"
                : "text-white"
                }`}
        >
            <span>{children}</span>
            <FiChevronDown
                className={`transition-transform ${selected === tab ? "rotate-180" : ""
                    }`}
            />
        </button>
    );
};

const Content: React.FC<ContentProps> = ({ selected, dir }) => {
    return (
        <motion.div
            id="overlay-content"
            initial={{
                opacity: 0,
                y: 8,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 8,
            }}
            className="absolute left-0 top-[calc(100%_+_24px)]  rounded-lg border  border-tertiary-200 bg-gradient-to-b  from-secondary-300  via-secondary-300 to-neutral-800 p-4"
        >
            <Bridge />
            <Nub selected={selected} />

            {TABS.map((t) => {
                return (
                    <div className="overflow-hidden" key={t.id}>
                        {selected === t.id && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                            >
                                <t.Component />
                            </motion.div>
                        )}
                    </div>
                );
            })}
        </motion.div>
    );
};

const Bridge: React.FC = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub: React.FC<NubProps> = ({ selected }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
        moveNub();
    }, [selected]);

    const moveNub = () => {
        if (selected !== null) {
            const hoveredTab = document.getElementById(`shift-tab-${selected}`);
            const overlayContent = document.getElementById("overlay-content");

            if (!hoveredTab || !overlayContent) return;

            const tabRect = hoveredTab.getBoundingClientRect();
            const { left: contentLeft } = overlayContent.getBoundingClientRect();

            const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

            setLeft(tabCenter);
        }
    };

    return (
        <motion.span
            style={{
                clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
            }}
            animate={{ left }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border  border-tertiary-200 bg-neutral-900"
        />
    );
};

const About: React.FC = () => {
    const about = [{
        title: 'About us',
        href: '/about/about-us'
    },
    {
        title: 'Our Team',
        href: '/about/team'
    },
    {
        title: 'Book Free Meeting',
        href: '/book-meeting'
    },
    {
        title: 'Contact',
        href: '/about/contact'
    },
    {
        title: 'Testimonials',
        href: '/about/testimonials'
    },
    {
        title: 'FAQ',
        href: '/about/faq'
    },

    ]
    return (
        <div>
            <div className="flex ">
                <div>
                    <h3 className="mb-2 text-sm font-medium">About</h3>

                    {about.map((item, index) => (
                        <Link key={index + 1} href={item.href} className="mb-1 block text-sm text-neutral-400">
                            {item.title}
                        </Link>
                    ))
                    }

                </div>

            </div>


        </div>
    );
};

const Services: React.FC = () => {
    const [active, setActive] = useState<string>('Web Development');
    const hoverRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    const ServicesInfo: ServiceInfo[] = [
        {
            subtitle: 'Web Development',
            image: 'https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/web-development',
        },
        {
            subtitle: 'Influencer Marketing',
            image: 'https://static.vecteezy.com/system/resources/previews/005/732/516/non_2x/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/influencer-marketing',
        },
        {
            subtitle: 'SEO',
            image: 'https://media.istockphoto.com/id/1385957068/photo/seo-search-engine-optimization-marketing-ranking-traffic-website-internet-business-technology.jpg?s=612x612&w=0&k=20&c=1IDmzJNcAl_ttoIIYE4AbXe98MKL02EiFs5b9hJnqrc=',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/seo',
        },
        {
            subtitle: 'Social Media Marketing',
            image: 'https://img.lovepik.com/photo/48006/8205.jpg_wh860.jpg',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/social-media-marketing',
        },
        {
            subtitle: 'PPC/Ads',
            image: 'https://img.freepik.com/premium-vector/cartoon-illustration-blue-backdrop-abstract-ppc-marketing-advertising-design_123447-2962.jpg',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/ppc',
        },
        {
            subtitle: 'Reputation Mangement',
            image: 'https://img.freepik.com/premium-vector/cartoon-illustration-blue-backdrop-abstract-ppc-marketing-advertising-design_123447-2962.jpg',
            buttonText: 'REQUEST FREE QUOTE',
            buttonLink: '/services/reputation-mangement',
        },
    ];

    useEffect(() => {
        const activeIndex = ServicesInfo.findIndex(item => item.subtitle === active);
        if (hoverRefs.current[activeIndex]) {
            hoverRefs.current[activeIndex]?.focus();
        }
    }, [active, ServicesInfo]);

    return (
        <div>
            <div className="flex w-[24.8rem] space-x-12">
                <div className="w-48">
                    {ServicesInfo.map((item, index) => (
                        <Link
                            key={index}
                            href={item.buttonLink}
                            ref={(el) => { hoverRefs.current[index] = el; }}
                            className={`mb-1 text-sm flex justify-start items-center outline-none border-none hover:text-white ${active === item.subtitle ? 'text-white' : 'text-paragraph-200'
                                }`}
                            onMouseEnter={() => setActive(item.subtitle)}
                        >
                            {item.subtitle}
                            <span className={`${active === item.subtitle ? 'flex' : 'hidden'} ml-2`}>
                                <FaArrowRight size={10} color="#fff" />
                            </span>
                        </Link>
                    ))}
                </div>
                <div className="w-48">
                    <img
                        src={ServicesInfo.find(item => item.subtitle === active)?.image}
                        alt={active}
                        className="w-full h-24 rounded-xl object-cover"
                    />
                    <Link href={ServicesInfo.find(item => item.subtitle === active)?.buttonLink || ''}>
                        <button className="bg-button-gradient mt-3 w-full rounded-md text-white flex border-tertiary-200 border-2 px-2 py-1 justify-center font-normal items-center text-sm">
                            <span>{ServicesInfo.find(item => item.subtitle === active)?.buttonText}</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


const TABS: TabType[] = [
    {
        title: "About",
        Component: About,
    },
    {
        title: "Services",
        Component: Services,
    },

].map((n, idx) => ({ ...n, id: idx + 1 }));
