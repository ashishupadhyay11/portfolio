import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Milky from '../assets/milky.jpg'
import {Link} from 'react-scroll'
import { Helmet } from 'react-helmet';

const home = () => {
  
  return (
    
    
    <div name ='home' className='back-home w-full h-screen bg-[#0a192f]' 
      style={{backgroundImage:`linear-gradient(rgba(10, 25, 47, 0.3), rgba(10, 25, 47, 0.9)),url(${Milky})`,backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'}}>
<div>
      <Helmet>
        <title>Ashish Upadhyay</title>
      </Helmet>
      {/* Your component content */}
    </div>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-bold'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f2f3f7]'>Ashish Upadhyay</h1>
        <h2 className='text-4xl sm:7xl font-bold text-[#8892b0]'>I am a full-stack developer.</h2>
        <p className='text-[#afb3be] py-4 max-w-700px font-bold'>
        I previously worked as a Software Engineer at <a href="https://www.accenture.com/" class="text-purple-400">Accenture Technology</a> . I am currently pursuing a master's degree in Applied Computer Science at <a href="https://www.concordia.ca/about.html" class="text-red-400">Concordia University</a>  in Montreal, Quebec, where I have been honing my technical expertise in programming, algorithm design, and software development.
        
        </p>
        <div>
        
  <button className='text-white group border-2 px-6 py-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
  <Link to="work" smooth={true} duration={500} >
                        View Work
                    </Link>
    <span className='group-hover:rotate-90 duration-300'>
      <HiArrowNarrowRight className='ml-3'/>
    </span>
  </button>

        </div>
      </div>
    </div>
  )
}

export default home