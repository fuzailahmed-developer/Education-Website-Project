import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { navItems } from '../constant/data'
import { BiMenu } from 'react-icons/bi'

const Header = () => {

  const [isOpen,setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full py-5'>
      <div className="container  flex justify-between items-center">
        {/* logo */}
        <div>
          <a href="#" className='border-none outline-none select-none'>
            <img src='/images/logo.png' alt="" />
          </a>
        </div>

        {/* close menu */}
        <nav className={`navbar ${isOpen ? 'active' : ""}`}>
          <button className=' absolute top-8 right-8' onClick={handleClick}>
            <RxCross2 size={30} />
          </button>

          {/* list  */}
          <ul className='flex flex-col gap-y-3 text-center'>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className='text-lg font-medium hover:text-orange-50 transition-colors duration-200'>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* login btn */}
          <button className="primary-btn">Login</button>
        </nav>

        {/* menu btn*/}

        <div className='lg:hidden' onClick={handleClick}>
          <BiMenu size={30} />
        </div>

        {/* lg menu */}

        <div className='max-lg:hidden flex items-center gap-10'>
          <ul className='flex space-x-10'>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className='hover:text-orange-50 transition-colors font-medium text-lg'
                >{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="primary-btn">Login</button>
        </div>


      </div>
    </header>
  )
}

export default Header