import React from 'react'
import WorkImg from '../assets/3.jpg'
import WorkImg2 from '../assets/mask.jpeg'
import Milky from '../assets/milky.jpg'
const Work = () => {
  return (
    <div name ="work"className='w-full md:h-screen text-gray-300 bg-[#0a192f]' style={{backgroundImage:`linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.4)),url(${Milky})`,backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'> Check out some of my recent work </p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-col-3 gap-4'>

          {/* Project 1*/}
          <div style={{backgroundImage:`url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Social Media Web-app 
              </span>
              <div>
                <a href='https://github.com/ashishupadhyay11/react-web-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/ashishupadhyay11/react-web-app/tree/master/src'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2*/}
          <div style={{backgroundImage:`url(${WorkImg2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                    Mask Detector Web-app 
              </span>
              <div>
                <a href='https://github.com/ashishupadhyay11/imageclassification'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/ashishupadhyay11/imageclassification/blob/master/Image_Classification.ipynb'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work