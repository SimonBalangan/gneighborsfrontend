import { Link } from "react-router-dom";
import "./searchItem.css";


const SearchItem = ({ item }) => {

  return (
    /*Page 2: Liste der Suche*/ 
    <div className="searchItem">
      {/* <img src={item.photos[0]} alt="" className="siImg" /> */}
      <img className="siImg" src={item.photos[0]} alt=""/>
      
      <div className="siDesc">
        <h1 className="siTitle"> {item.name}</h1>
        <span className="siDistance">is {item.distance}m away from your location</span>
        <span className="siSubtitle">
          <h2 className="siTitle2">{item.title}</h2>
        </span>
        <span className="siFeatures">{item.desc}</span>
      </div>
      <div className="siDetailTexts">
          
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      
    </div>
    
  );
};

export default SearchItem;
