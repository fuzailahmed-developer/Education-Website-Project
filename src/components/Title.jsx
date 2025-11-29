import React from 'react'

const Title = ({ title, text, link }) => {
    return (
        <div className='flex flex-wrap justify-between items-center gap-4' data-aos="fade-up">
            <div>
                <h2>{title}</h2>
                <p className='max-w-[640px] mt-4 mb-6'>{text}</p>
            </div>
            <button className='secondary-btn'>{link}</button>
        </div>
    )
}

export default Title