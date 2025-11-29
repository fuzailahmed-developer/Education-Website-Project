import React from 'react'
import { heroLogos } from '../constant/data'
import { IoIosPlay } from "react-icons/io";
import Marquee from 'react-fast-marquee';


const Hero = () => {
    return (
        <section>
            <div className="container">
                {/* content */}
                <div className="mt-[50px] md:mt-20 text-center" data-aos="fade-up">
                    {/* title */}
                    <div className='max-w-max mx-auto relative pt-8 pl-8'>
                        <span className='absolute top-0 left-0'>
                            <img src="/public/images/shape-1.png" alt="shape" width={39} height={43} />
                        </span>
                    <div className='flex items-center bg-white-99 border border-white-95 p-3.5 justify-center gap-2.5 max-w-max mx-auto flex-wrap'>
                        <span>
                            <img src="/public/images/shape-2.png" alt="shape" width={48} height={48} />
                        </span>
                        <h1 className='md:text-4xl text-2xl'><span className='text-orange-50'>Unlock</span> Your Creative Potential</h1>
                    </div>
                    </div>
                    <p className='md:text-[28px] text-2xl font-medium mt-4'>
                        with Online Design and Development Courses.
                    </p>
                    <p>
                        Learn from Industry Experts and Enhance Your Skills.
                    </p>
                    {/* btn wrapper */}
                    <div className='flex items-center justify-center gap-3 mt-12 flex-wrap'>
                        <button className='primary-btn max-sm:w-[80%]'>Explore Courses</button>
                        <button className='secondary-btn max-sm:w-[80%]'>View Pricing</button>
                    </div>
                    {/* clients logos */}
                    <div className='mt-8 lg:mt-[100px] relative overflow-hidden'>
                        <Marquee pauseOnHover={true}>
                            {heroLogos.map((logo) => (
                                <div key={logo.id} className='px-14 py-5'>
                                    <img src={logo.img} width={logo.width} height={28} alt="image" />
                                </div>
                            ))}
                        </Marquee>

                    {/* left gradient */}
                    <div className='absolute top-0 left-0 bg-linear-to-r po from-white-97 via-white-97/80 h-full to-transparent w-24 z-10'></div>
                    {/* right gradient */}
                    <div className='absolute top-0 right-0 bg-linear-to-l po from-white-97 via-white-97/80 h-full to-transparent w-24 z-10'></div>

                    </div>
                </div>
                {/* banner */}
                <figure className='relative rounded-xl overflow-hidden mt-10 md:mt-14 lg:mt-[50px] max-w-[920px] w-full h-[500px] mx-auto'>
                    <img src="/images/hero-banner.png" alt="" width={940} height={500} className='w-full h-full object-cover' />

                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10"></div>

                    {/* play btn */}
                    <div className="absolute top-1/2 left-1/2 z-20 -translate-1/2 cursor-pointer">
                        <span className='bg-white w-16 h-16 flex justify-center items-center rounded-full play-btn'>
                            <IoIosPlay size={30}/>
                        </span>
                    </div>

                </figure>
            </div>
        </section>
    )
}

export default Hero