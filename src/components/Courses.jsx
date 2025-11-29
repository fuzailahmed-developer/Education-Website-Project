import React from 'react'
import Title from './Title'
import { coursesSecItems } from '../constant/data'

const Courses = () => {
    return (
        <section className='section'>
            <div className="container">
                {/* Title */}
                <Title title={'Our Courses'} text={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'} link={'View All'} />
                {/* Card Wrapper */}
                <div className='grid gap-5 lg:mt-16 mt-8 lg:grid-cols-2'>
                    {coursesSecItems.map((item) => (
                        // card
                        <div key={item.id} className='bg-white p-7 lg:p-10 rounded-[10px]' data-aos="fade-up">
                            {/* image */}
                            <div>
                                <img src={item.img} alt={item.title} width={560} height={266} className='w-full h-full object-cover rounded-[10px]'/>
                            </div>
                            {/* content */}
                            <div className='mt-6'>
                                {/* Tags */}
                                <div className='flex items-center flex-wrap gap-2.5 '>
                                    {item.tags.map((tag,index) => (
                                        <span key={index} className='border border-orange-75 p-2 rounded-md bg-orange-97'>{tag.tag}</span>
                                    ))}
                                    <p className='ml-auto font-medium'>{item.instructor}</p>
                                </div>
                                {/* meta data */}
                                <div className='my-6 space-y-1.5'>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                            {/* btn */}
                            <button className='bg-white-97 p-3.5 hover:text-orange-50 w-full border hover:border-orange-50 transition-all border-transparent rounded-md'>Get it now</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Courses