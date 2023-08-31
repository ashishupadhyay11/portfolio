import React from 'react'
import Milky from '../assets/milky.jpg'
const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' style={{backgroundImage:`linear-gradient(rgba(10, 25, 47, 0.4), rgba(10, 25, 47, 0.9)),url(${Milky})`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
        <form method='POST' action="https://getform.io/f/081c5998-db3b-4b5c-8f6b-b4dc84fb2588" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email !</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 font-bold' type="text" placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-[#ccd6f6] font-bold' type="email" placeholder='E-Mail' name='email'></input>
            <textarea className='bg-[#ccd6f6] p-2 font-bold'  name='message' rows='10' placeholder='Message'></textarea>
            <button className='text-white border-2 font-bold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'> Let's Work Together! </button>
        </form>
    </div>
  )
}

export default Contact