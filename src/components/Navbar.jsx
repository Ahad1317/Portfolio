import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [Active, setActive] = useState("")
  const [Toggle, setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#040127]`}>
      <div className='w-full flex justify-between items-center max-w--7xl mx-auto bg-#232f3d'>
        <Link to = "/" className='flex items-center gap-2' onClick={()=>{
          setActive("");
          window.scrollTo(0, 0);
        }}>
            <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Abdul &nbsp;
            <span className='sm:block hidden'>   Ahad</span></p>
        </Link>
              <ul className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((link)=>(
                  <li key={link.id}
                  className={`${ Active === link.title
                                  ? "text-white"
                                  : "text-secondary"
                                  } hover:text-white text-[18px] font-medium
                                  cursor-pointer`}
                                  onClick={()=>setActive(link.title)}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <img src ={Toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
                  onClick={()=> setToggle(!Toggle)}/>  
                  <div className={`${!Toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
                  z-10 rounded-xl`}>
                    <ul className='list-none flex justify-end items-start flex-col gap-4'>
                {navLinks.map((link)=>(
                  <li key={link.id}
                  className={`${ Active === link.title
                                  ? "text-white"
                                  : "text-secondary"
                                  } font-poppins font-medium cursor-pointer
                                  text-[16px] hover:text-white`}
                                  onClick={()=>{
                                    setToggle(!Toggle);
                                    setActive(link.title);
                                  }}>
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
                    </div>                                
              </div>
      </div>
      <a href="/planet/Ahad.pdf" target="_blank">
        <motion.button
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay:0.5}}
        className='px-4 rounded-md ml-6 text-blue-500 text-[25px] border border-blue-500 hover:text-blue-100 duration-300  '>
        Resume
        </motion.button>
      </a>
    </nav>
  )
}

export default Navbar