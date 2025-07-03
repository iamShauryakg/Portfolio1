import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import About_Me from './About_Me';


function Navbar() {
  useEffect(() => {
    document.title = "Portfolio"
  });


    return (
       <header id="home">
  <nav>
    <div className="menu">
      <div className="logo">
        <img src="images/logo-shaurya.png" alt="logo" />
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
      <img src="images/profile2.jpg" alt="profile1" className="profile" />
    </div>

</header>

    )
}
export default Navbar;