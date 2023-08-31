import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'
import Milky from '../assets/milky.jpg'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' style={{backgroundImage:`linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.9)),url(${Milky})`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        {/*container*/}
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'> Skills </p>
            <p className='py-4'> Technologies I have worked with: </p>            
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt="Js icon"/>
                <p className='my-4'>JavaScript</p>
        </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt="HTML icon"/>
                <p className='my-4'>HTML</p>
            </div>
            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt="css icon"/>
                <p className='my-4'>CSS</p> */}
            {/* </div> */}
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt="Tailwind icon"/>
                <p className='my-4'>Tailwind CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt="React icon"/>
                <p className='my-4'>React</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={github} alt="GitHub icon"/>
                <p className='my-4'>GitHub</p>
            </div>
            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt="Node icon"/>
                <p className='my-4'>Node</p> */}
            {/* </div> */}
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt="Java icon"/>
                <p className='my-4'>Java</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={python} alt="Python icon"/>
                <p className='my-4'>Python</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills