import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col w-full justify-center items-center'>

            <div className='w-full flex items-center px-48 bg-gradient-to-b py-16 from-tertiary-200  to-secondary-300  justify-between'>
                <div>
                    <p className='  text-4xl text-white font-semibold'>
                        Transform your business with us
                    </p>
                    <p className=' text-sm text-paragraph-200'>Boost sells and enhance customer experience with Glossour</p>
                </div>

                <button className=' shadow-md text-sm text-tertiary-200 font-bold bg-white px-3 py-2 rounded'>Connect</button>
            </div>

            <div className="flex w-full h-full px-48 py-10">
                <div className="w-3/5 pr-64 flex flex-col justify-start space-y-5">
                    <div className=' text-3xl text-white font-bold'> Glossour</div>
                    <p className='text-paragraph-200 text-xs'>We are a digital marketing agency that specializes in SEO, Social Media Marketing, and Content Marketing.</p>
                    <div className="w-full flex space-x-2">
                        <input className=' rounded-3xl border-paragraph-200 border py-2 px-3 bg-transparent placeholder:text-paragraph-200 placeholder:text-xs' placeholder='Enter your email.' />
                        <button className='bg-white   text-tertiary-200 text-xs  font-medium rounded-3xl py-2 px-3'>Subscribe</button></div>

                    <p className='text-paragraph-200 text-[10px]'>We are a digital marketing agency that specializes in SEO, Social Media Marketing, and Content Marketing. </p>
                </div>

                <div className="w-1/3 flex flex-col space-y-2 justify-center items-end">
                    <h1 className=' text-paragraph-200 font-medium '> Page</h1>
                    {['Home', 'Services', 'About', 'Contact', 'Blog'].map((item, index) => (
                        <>
                            <p key={index} className=' text-sm text-paragraph-200 hover:text-white cursor-pointer font-light'>{item}</p>
                        </>
                    ))}
                </div>
                <div className="w-1/3 flex flex-col space-y-2 justify-center items-end">
                    <h1 className=' text-paragraph-200 font-medium'> Follow us</h1>
                    {['Facebook', 'Instgram', 'X', 'LinkedIn', 'Youtube'].map((item, index) => (
                        <>
                            <p key={index} className=' cursor-pointer text-sm hover:text-white text-paragraph-200 font-light'>{item}</p>
                        </>
                    ))}
                </div>
            </div>
            <div className="flex w-full border-t justify-between border-[#333] px-64 py-8">
                <div className="flex justify-between w-full">
                    <div className=' text-xs text-paragraph-200'>  ©2024 Glossour. All rights reserved.
                    </div>
                    <div className=' flex space-x-5'>
                        <p className='text-xs text-paragraph-200 hover:underline hover:text-white cursor-pointer'>Privacy Policies</p>
                        <p className='text-xs text-paragraph-200 hover:underline hover:text-white cursor-pointer'>Terms & Conditions</p>
                        <p className='text-xs text-paragraph-200 hover:underline hover:text-white cursor-pointer'>Cookies settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
