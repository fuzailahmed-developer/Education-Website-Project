import React from 'react'
import { contactInfo, footerLists, socialIcons } from '../constant/data'

const Footer = () => {
    return (
        <footer className='pt-14 pb-8 bg-white'>
            <div className="container">
                {/* footer top */}
                <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]'>
                    {/* footer brand  */}
                    <div>
                        {/* footer logo */}
                        <div>
                            <img src="/images/logo.png" alt="" width={150} height={50} />
                        </div>
                        {/* links */}
                        <div className='mt-8 space-y-4'>
                            {contactInfo.map((item) => (
                                <a href="#" key={item.id} className='flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors'>
                                    {<item.icon />}
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* footer list */}
                    {
                        footerLists.map((item) => (
                            <div key={item.id} className='space-y-3'>
                                <p className='font-semibold text-lg'>{item.title}</p>
                                <ul className='space-y-2.5'>
                                    {item.links.map((link, index) => (
                                        <li key={index} className='hover:text-orange-50 transition-colors cursor-pointer'>{link.label}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                    {/* social profile */}
                    <div>
                        <p className='text-lg font-semibold'>Social Profile</p>
                        <div className='mt-5 flex gap-3'>
                            {socialIcons.map((item) => (
                                <button key={item.id} className='secondary-btn p-3.5 bg-white-97 hover:bg-white-99 transition-all hover:shadow-md'>
                                    <a href="#">
                                        {<item.icon />}
                                    </a>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {/* footer bottom */}
                <p className='lg:mt-20 mt-16 text-center'>&copy; {new Date().getFullYear()} Skillbridge. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer