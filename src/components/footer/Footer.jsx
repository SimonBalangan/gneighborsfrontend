import "./footer.css";
import world from './world.png'
// import logo2 from './logo2.png'
import gnlogo1 from '../navbar/images/gnlogo1.png'
import gnlogo2 from '../navbar/images/gnlogo2.png'
import gnlogo3 from '../navbar/images/gnlogo3.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
      <Link
          to='/'
          >
          
          <img
            src={gnlogo1}
            className='logo-footer'
          />
           {/* <img
            src={logo2}
            className='logo'
          /> */}
          </Link>
       
        <ul className="fList">
        {/* <li className="fListItem">
        <a href="https://www.pathfinders.design/en/about#show5" className="egg">Meeh, tell me more...</a>
        </li> */}
          <li className="fListItem">Jobs</li>
          <li className="fListItem">Partner Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          
        </ul>
        <ul className="fList">
          
          <li className="fListItem">Press center</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">⇩</li>
          <li className="fListItem">
        <a href="https://www.pathfinders.design/en/about#show5" className="egg">Meeh, tell me more...</a>
        </li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Good Neighbors.</div>
    </div>
  );
};

export default Footer;
