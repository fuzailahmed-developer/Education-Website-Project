import React from 'react'
import Title from './Title'
import { testimonialsItems } from '../constant/data'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import { SwiperSlide , Swiper } from 'swiper/react'
import 'swiper/swiper.css'
import { Autoplay, Navigation } from 'swiper/modules'
const Testimonials = () => {
    return (
        <section className='section'>
            <div className="container">
                {/* Title */}
                <Title title={'Our Testimonials'} text={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'} link={'View All'} />
                {/* Card */}
                <Swiper 
                modules={[Navigation , Autoplay]}
                spaceBetween={30}
                breakpoints={{
                    640 : {
                        slidesPerView : 1
                    },
                    768 : {
                        slidesPerView : 1.5
                    },
                    1280 : {
                        slidesPerView : 2.5
                    },
                }}
                loop={true}
                navigation={{
                    prevEl : '.prev-btn',
                    nextEl : '.next-btn'
                }}
                className='mt-14 lg:mt-16'>
                    {testimonialsItems.map((item) => (
                        // card
                        <SwiperSlide key={item.id} className='bg-white border border-white-95 p-8 lg:p-10 rounded-[10px] space-y-3 cursor-pointer'>
                            <p>{item.text}</p>
                            <div>
                                {/* image */}
                                <div className='flex justify-between items-center flex-wrap pt-4 border-orange-90 gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <div>
                                            <img src={item.img} alt={item.author} width={50} height={50} />
                                        </div>
                                        {/* auth */}
                                        <p className='font-medium'>{item.author}</p>
                                    </div>
                                <button className='secondary-btn'>Read Full</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* navigation btn */}

                <div className='flex items-center justify-center gap-5 mt-10'>
                    <button className='w-12 h-12 bg-orange-70 hover:bg-orange-75 flex justify-center items-center rounded-xl transition-colors active:bg-orange-75/80 prev-btn'>
                        <RiArrowLeftLine size={30} />
                    </button>
                    <button className='w-12 h-12 bg-orange-70 hover:bg-orange-75 flex justify-center items-center rounded-xl transition-colors active:bg-orange-75/80 next-btn'>
                        <RiArrowRightLine size={30} />
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Testimonials

