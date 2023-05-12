import Logo from  '../../assets/logo.png';
import './Navbar.css'
import {BiMenuAltLeft} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useState } from 'react';

function navbar() {
  const [showMenu , setShowMenu] = useState(false);

  const handleClick = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-menu">
            <div className='logo-box'>
              <img src={Logo} alt="logo" />
            </div>
            <div className='desktop-menu' >
              <ul className='d-flex sub-menu'>
              <li>Home</li>

              <li>Blog</li>
              <li>Docs</li>
              <li>Tokenomics</li>
              <li>Contact</li>

              </ul> 
              </div>

              <div className='nav-btn-box'>
                <button className='nav-btn'>Connect</button>
              </div>

              <div className='hamburger'>
                <button onClick={handleClick}>
                   
                <BiMenuAltLeft/>
                </button>
              </div>
          </div>
        </div>
        <div className={showMenu ?'show' : 'nav-mob-menu'}>
          <div className='close-box'>

          <AiOutlineCloseCircle onClick={()=>(setShowMenu(false))} className='close'/>
          </div>

        <div className='' >
              <ul className='d-flex sub-menu'>
              <li>Home</li>

              <li>Blog</li>
              <li>Docs</li>
              <li>Tokenomics</li>
              <li>Contact</li>
              <li> <button className='nav-btn'>Connect</button></li>
              </ul> 
              </div>

        </div>
      </nav>
    </>
  );
}

export default navbar;
