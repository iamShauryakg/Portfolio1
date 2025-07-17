import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import About_Me from './About_Me';
import background from '../assets/background.png';
import  profile2 from '../assets/profile2.jpg'
import  logo_shaurya from '../assets/logo-shaurya.png'


function Navbar() {
  useEffect(() => {
    document.title = "Portfolio"
  });


    return (
       <header id="home" className="h-screen max-w-screen">
        <div className='bg-no-repeat bg-center bg-cover overflow-hidden h-screen'
             style={{ backgroundImage: `url(${background})` }}>

        <nav className="fixed py-[10px] flex bg-[rgba(0, 0, 0, 0.233)]  w-full z-[999]  mx-auto">
          <div className="w-full m-auto flex items-center justify-around py-[10px] px-[30px]">
            <div className="m-auto ">
              <img src={logo_shaurya} alt="logo" className='w-[140px] h-auto' />
            </div>

            <div className="navbar">
              <ul className="flex gap-7  mr-4">
                <li className="ml-4 py-6">
                  <a href="#home" className="px-4 py-4 text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Home</a>
                </li>
                <li className="ml-4 py-3">
                  <a href="#about" className="px-4 py-2  text-[#fff]  font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">About</a>
                </li>
                <li className="ml-4 ">
                  <a href="#education" className="px-4 py-2 text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Education</a>
                </li>
                <li>
                  <a href="#projects" className="px-4 py-2 text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Projects</a>
                </li>
                <li>
                  <a href="#achievements" className="px-4 py-2 text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Achievements</a>
                </li>
                <li>
                  <a href="#resume" className="px-4 py-2 text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Resume</a>
                </li>
                <li>
                  <a href="#contact" className="p-[50px] text-[#fff] font-semibold text-[20px] hover:bg-white hover:text-black rounded transition duration-400">Contact Me</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>


    <div className="relative top-[33%] left-[5%] z-2 ">
      <div className="text-[#fff] text-[25px] ">Hello,<span className='text-[rgb(209,49,49)] text-[27px]'> It's me</span></div>
      <div className="text-[30px] text-[#e0dede]">Shaurya Kumar Gupta</div>
      <div className="text-[40px] text-[#73bde2] flex my-0 mx-[10px]">
        <span>And, I'm a</span>
        <div className="typingtext">
        <span> Software Developer</span>
        </div>
      </div>
    </div>

    <div className="w-[35%] h-[60%] absolute bottom-[140px] right-[150px]">
      <img src={profile2} alt="profile2" className="images1" />
    </div>

    </div>
</header>

    )
}
export default Navbar;