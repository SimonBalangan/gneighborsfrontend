import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    
    "/hotels/countByCity?cities=Neustadt,Altstadt,Mainz"
  );
  
  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className="featuredItem">
          <img
            src="https://www.campus-mainz.net/fileadmin/_processed_/1/2/csm_Bild_1_b_cc1ac1390d.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <strong><h1>Neustadt</h1></strong>
            <h2>{data[0]} members</h2>
            
            
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://image.geo.de/30149712/t/Xu/v3/w1440/r0/-/mainz-s-1080531929-jpg--85372-.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
           <strong> <h1>Altstadt</h1></strong>
            <h2>{data[1]} members</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://mainz-citymanagement.de/wp-content/uploads/2021/06/Verein.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <strong><h1>Innenstadt</h1></strong>
            <h2>{data[2]} members</h2>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default Featured;
