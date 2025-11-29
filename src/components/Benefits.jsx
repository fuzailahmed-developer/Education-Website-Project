import React from 'react'
import Title from './Title'
import { benefitItems } from '../constant/data'
import { RiArrowRightUpLine } from '@remixicon/react'

const Benefits = () => {
  return (
    <section className='section'>
      <div className="container">
        {/* Title */}
        <Title title={'Benefits'} text={'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.'} link={'View All'}/>
        {/* Card wrapper */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mt-12 lg:mt-16">
          {
            benefitItems.map((item) => (
              // card 
              <div className="bg-white p-10 flex flex-col rounded-xl" key={item.id} data-aos="fade-up">
                {/* icon */}
                <div className='bg-orange-75 w-[55%] rounded-xl h-24 flex justify-center items-center mx-auto mb-8'>
                  <img src={item.icon} alt={item.title} width={64} height={64}/>
                </div>
                {/* content */}
                <div className="text-center mb-4 space-y-3.5">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                {/* button */}
                <button className='mt-auto ml-auto border border-white w-14 h-14 text-orange-50 flex justify-center items-center hover:bg-orange-50 hover:text-white transition-colors rounded-sm'>
                  <RiArrowRightUpLine size={26}/>
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Benefits