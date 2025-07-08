import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import About_Me from './About_Me';
import  profile2 from '../assets/profile2.jpg'
import  logo_shaurya from '../assets/logo-shaurya.png'


function Navbar() {
  useEffect(() => {
    document.title = "Portfolio"
  });


    return (
       <header id="home" className="header">
        <div className='headerimg'>

        <nav>
          <div className="menu">
            <div className="logo">
              <img src={logo_shaurya} alt="logo" />
            </div>
            <div className="navbar">
              <ul>
                <li><a href="#home" >Home</a></li>
                <li><a href="#about" >About</a></li>
                <li><a href="#" >Education</a></li>
                <li><a href="#" >Projects</a></li>
                <li><a href="#" >Achievements</a></li>
                <li><a href="#" >Resume</a></li>
                <li><a href="#" >Contact Me</a></li>
              </ul>
            </div>
          </div>
        </nav>


    <div className="content12">
      <div className="text">Hello,<span> It's me</span></div>
      <div className="name">Shaurya Kumar Gupta</div>
      <div className="role">
        <span>And, I'm a</span>
        <div className="typingtext">
        <span> Software Developer</span>
        </div>
      </div>
    </div>

    <div className="images">
      <img src={profile2} alt="profile2" className="profile" />
    </div>

    </div>
</header>

    )
}
export default Navbar;