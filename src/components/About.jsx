import React from 'react'
import Milky from '../assets/milky.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' style={{backgroundImage:`linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.3)),url(${Milky})`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Ashish. Please take a look around!</p>
                    </div>
                    <div>
                        <p>During my tenure as a Software Engineer at Accenture, I got trained as a Java Developer and gained 
                        valuable experience in building client projects using Java, Spring Boot, HTML5, CSS, 
                        and Jenkins. I am proficient in Python, C++, and ReactJS, and I have leveraged these 
                        skills in a variety of projects, including a Full Stack Social Media Web App and a Mask Detection system using Machine Learning. 
                        As evident from my project work, I have demonstrated the ability to collaborate effectively with teams, solve complex problems, and deliver 
                        high-quality results within deadlines. My experience as a system administrator for tech fests and eSports tournaments highlights my adaptability and leadership qualities.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
 