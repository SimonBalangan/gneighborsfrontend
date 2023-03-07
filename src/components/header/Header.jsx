import {
  faCalendarDays,
  faMapPin,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useState, useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate, Link } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import neighbors from './images/neighbors.png'
import bgHeader from './images/bgHeader.jpg'


const Header = () => {
  const [product, setProduct] = useState("");
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(SearchContext);

 

  const handleSearch = () => {
    
    dispatch({ type: "NEW_SEARCH", payload: { product, destination, dates } });
    navigate("/hotels", { state: { product, destination, dates } });
    // navigate("/products", { state: { product, destination, dates } });
  };

 


  // console.log('product', product, "location", destination)

  return (
    <div className="header">
     
      <div className="headerContainer">
          {/* <Link
          to='/'
          >
          <img
            src={neighbors}
            className='logo'
          />
           
          </Link> */}
            {/* <p className="headerDesc">
              Welcome to your neighborhood!
            </p> */}
            {/* { !user &&
              <Link to='/login'>
              <button className="headerBtn">
                Sign in / Register
              </button> </Link>
              } */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faQuestion} className="headerIcon" />
                <input
                  type="text"
                  placeholder="What are u looking for?"
                  className="headerSearchInput"
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faMapPin} className="headerIcon" />
                <input
                  type="text"
                  placeholder="What location?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
             
                <button className="headerBtn" onClick = {handleSearch} >
                  Search
                </button>
                
              </div>
              
            </div>
          
        
      </div>
    </div>
  );
};

export default Header;



// import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
// import { faBabyCarriage, faGamepad, faGear, faKitchenSet } from '@fortawesome/free-solid-svg-icons'      //go to the fortawsome website and istall all dep and import the icon file you want        
// import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons' 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { DateRange } from 'react-date-range';
// import {useState} from 'react'
// import './header.css'
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import {format} from 'date-fns'
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const [product, setProduct] = useState('')
//     const [destination, setDestination] = useState('')
//     const [openDate, setOpenDate] = useState(false)
//     const [date, setDate] = useState([
//         {
//           startDate: new Date(),
//           endDate: new Date(),
//           key: 'selection'
//         }
//       ]);

// const navigate = useNavigate();

// const handleSearch = () => {
//     navigate('/products', { state:{ product, destination, date } });
// }

//   return (
//     <div className='header'>
//         <div className='headerContainer'>
//             <div className='headerList'>
//                 <div className='headerListItem active'>
//                     <FontAwesomeIcon icon={faScrewdriverWrench} />
//                     <span>Tools</span>
//                 </div>

//                 <div className='headerListItem'>
//                     <FontAwesomeIcon icon={faKitchenSet} />
//                     <span>Kitchen</span>
//                 </div>
//                 <div className='headerListItem'>
//                     <FontAwesomeIcon icon={faBabyCarriage} />
//                     <span>Baby</span>
//                 </div>
                
//                 <div className='headerListItem'>
//                     <FontAwesomeIcon icon={faGamepad} />
//                     <span>Games</span>
//                 </div>
//             </div>
        
//             <h1 className='headerTitle'>Good Neighbors</h1>
//             <p>Welcome to your neighborhood!</p>
//             <button className='headerBtn'>Sign in / Register</button>
//             <div className='headerSearch'>
//                 <div className='headerSearchItem'>
//                     <FontAwesomeIcon icon={faGear} />
//                     <input  type='text' 
//                             placeholder='what are you looking for?'
//                             className='headerSearchInput'
//                             onChange={ (e) => setProduct(e.target.value) }
//                     />
//                 </div>
//                 <div className='headerSearchItem'>
//                     <FontAwesomeIcon icon={faGear} />
//                     <input  type='text' 
//                             placeholder='destination?'
//                             className='headerSearchInput'
//                             onChange={ (e) => setDestination(e.target.value) }
//                     />
//                 </div>
//                 <div className='headerSearchItem'>
//                     <FontAwesomeIcon icon={faCalendarDays} />
//                     <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate,'MM/dd/yyyy')} to ${format(date[0].endDate,'MM/dd/yyyy')}`}</span>
//                     {openDate && <DateRange
//                     editableDateInputs={true}  
//                     onChange={item => setDate([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={date}
//                     className='date'
//                     />}
//                 </div>
//                 <div className='headerSearchItem'>
//                     <button className='headerBtn' onClick={handleSearch}>Search</button>
//                 </div>
//             </div>
//         </div>    
//     </div>
    
//   )
// }

// export default Header