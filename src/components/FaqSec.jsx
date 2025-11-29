import React, { useState } from 'react'
import Title from './Title'
import { faqItems } from '../constant/data'
import { RiAddLine } from '@remixicon/react'

const FaqSec = () => {

    const [isOpen,setIsOpen] = useState(faqItems[3].id || null)

    const handleClick = (id) => {
        setIsOpen(isOpen == id ? null : id)
    }

    return (
        <section className='section pb-[90px] lg:pb-40'>
            <div className="container">
                <div className='grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10'>
                    {/* Title */}
                    <Title title={'Frequently Asked Questions'} text={'Still you have any questions? Contact our Team via support@skillbridge.com'} link={'See All FAQ’s'} />
                    {/* Question Wrapper */}
                    <div className='border border-white-95 grid p-6 ' data-aos="fade-up">
                        {faqItems.map((item) => (
                            // question
                            <div className='space-y-3.5' key={item.id}>
                                <div className='flex items-center justify-between gap-12 border-b border-white-95 pb-3'>
                                    {/* title  */}
                                    <h4 className='text-lg sm:text-xl'>{item.title}</h4>
                                    <button className='w-10 h-10 bg-orange-75 flex justify-center items-center aspect-square rounded-lg hover:bg-orange-75/80 transition-colors' onClick={() => handleClick(item.id)}>
                                        <RiAddLine size={30} className={`transition ${isOpen == item.id ? 'rotate-45' : ''}`}/>
                                    </button>
                                </div>
                                {/* text */}
                                <div className={`overflow-y-hidden transition-all duration-200 ${isOpen == item.id ? 'max-h-[200px]' : 'max-h-0'}`}>
                                    <p className='px-5 mb-3'>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSec