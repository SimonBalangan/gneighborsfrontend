import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {

  return (
    
    <div className="searchItem">
      {/* <img src={item.photos[0]} alt="" className="siImg" /> */}
      <img className="siImg" src={item.photos[0]} alt=""/>
      <div className="siDesc">
        {/* <h1 className="siTitle">{item.name}</h1> */}
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m away</span>
        {/* <span className="siDistance">300m from center</span> */}
        <span className="siSubtitle">
          blablablabababa
        </span>
        <span className="siFeatures">{item.desc}</span>
        {/* <span className="siFeatures">???????</span> */}
      </div>
      <div className="siDetailTexts">
          {/* <span className="siPrice">${item.cheapestPrice}</span> */}
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      {/* <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SearchItem;
