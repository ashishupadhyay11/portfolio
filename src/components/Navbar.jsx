import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutLineMail, HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/0-164.png'
import {Link} from 'react-scroll'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [emailText, setEmailText] = useState('E-Mail');

  const handleEmailClick = () => {
    if (emailText === 'E-Mail') {
      setEmailText('ashishu76@gmail.com');
    } else {
      setEmailText('E-Mail');
    }

  };

  const handleMouseOut = () => {
    setEmailText('E-Mail');
  };
    

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4  text-gray-300'>
        <div>
        <img  src={logo} alt="logo image" style={{ width: '200px', marginTop: '40px' }} />

        </div>
        {/*menu*/}
            <ul className='font-bold hidden md:flex'>
                <li> 
                    <Link to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li> 
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                
                <li> 
                    <Link to="skills" smooth={true} duration={500} >
                        Skills
                    </Link> </li>
                <li> 
                    <Link to="work" smooth={true} duration={500} >
                        Work 
                    </Link></li>
                <li> 
                    <Link to="contact" smooth={true} duration={500} >
                        Contact 
                    </Link>
                </li>
            </ul>
        

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/*Mobile menu*/}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li  className='py-6 text-4xl'> 
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li  className='py-6 text-4xl'> 
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li  className='py-6 text-4xl'> 
                    <Link onClick={handleClick} to="work" smooth={true} duration={500} >
                        Work 
                    </Link>
                </li>
                <li  className='py-6 text-4xl'> 
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                        Contact 
                    </Link> 
                </li>
            </ul>

        {/*Social icons*/}
        <div className = 'flex fixed flex-col top-[35%] left-0'> 
        <ul>
            <li className='w-[120px] md:w-[142px] lg:w-[180px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://www.linkedin.com/in/ashish-upadhyay-aa55b5149/"> <b>Linkedin</b> <FaLinkedin className="mr-[-10px] lg:mr-0 duration-300" size={30}/>
                </a>
            </li>
            <li className='w-[120px] md:w-[142px] lg:w-[180px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://github.com/ashishupadhyay11"> <b>GitHub</b> <FaGithub className="mr-[-10px] lg:mr-0 duration-300" size={30}/>
                </a>
            </li>
            <li id="emailLink" className='w-[120px] md:w-[142px] lg:w-[180px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700'>
                <button id='emailbutton'className='flex justify-between items-center w-full text-gray-300' 
                 onClick={handleEmailClick} onMouseOut={handleMouseOut}> <b>{emailText}</b><HiOutlineMail className="mr-[-10px] lg:mr-0 duration-300" size={30}/>
                </button>
            </li>
            <li className='w-[120px] md:w-[142px] lg:w-[180px] h-[40px] lg:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between items-center w-full text-gray-300' 
                href="https://drive.google.com/file/d/1lGnKinUwwzb3sgfhmOqyBNpIYY_0agyp/view?usp=drive_link"> <b>Resume</b> <BsFillPersonLinesFill className="mr-[-10px] lg:mr-0 duration-300" size={30}/>
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar