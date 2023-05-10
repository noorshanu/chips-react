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

              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>

              </ul> </div>

              <div>
                <button>Connect</button>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
