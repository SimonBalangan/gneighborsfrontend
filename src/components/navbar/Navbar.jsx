import "./navbar.css";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import bgHeader from './images/bgHeader.jpg'
// import neighbors from './images/neighbors.png'
import gnlogo1 from './images/gnlogo1.png'
import gnlogo2 from './images/gnlogo2.png'
import gnlogo3 from './images/gnlogo3.png'
import gnlogo4 from './images/gnlogo4.png'
import logoHeader from './images/logoHeader.png'

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    
    <div 
    className="navbar"
    src={bgHeader}>
      <div className="navContainer">
      {/* <Link to='/' >
        <span className="logo">GOOD NEIGHBORS</span>
      </Link> */}
      <Link
          to='/'
          >
          <img
            src={gnlogo4}
            className='logo'
          />
            {/* <h1 className="headerTitle">
              GOOD NEIGHBORS
            </h1> */}
          </Link>
          <div className="navBoxes">
          {/* <div className="navItems">
            <Link to='/about'>
                <button className="navButton">About</button>
            </Link>
          </div>
          <div className="navItems">
            <Link to='/help'>
                <button className="navButton">Help</button>
            </Link>
          </div>
          <div className="navItems">
            <Link to='/contact'>
                <button className="navButton">Contact</button>
            </Link>
          </div> */}
          <div className="navItems">
            <Link to='/contact'>
                <button className="navButton">Register</button>
            </Link>
          </div>
          <div className="navItems">
            <Link to='/login'>
                <button className="navButton">Login</button>
            </Link>
          </div>
      <div className="userName">
        <a href="https://www.pathfinders.design/en/about#show5" className="egg-nav">
        {user && user.username}
        </a>
      </div>
          {/* <div className="navItems">
            <button className="navButton">Register</button>
            <Link to='/login'>
              <button className="navButton">Login</button>
            </Link> */}
      
        
        {/* {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to='/login'>
              <button className="navButton">Login</button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
    </div>
    
  )
}

export default Navbar