import Logo from  '../../assets/logo.png';
import './Navbar.css'

function navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-menu">
            <div className='logo-box'>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <ul className='d-flex sub-menu'>
              <li>Home</li>

              <li>Blog</li>
              <li>Docs</li>
              <li>Tokenomics</li>
              <li>Contact</li>

              </ul> </div>

              <div>
                <button className='nav-btn'>Connect</button>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
