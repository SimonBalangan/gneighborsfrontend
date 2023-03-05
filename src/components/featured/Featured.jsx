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
            <h1>Neustadt</h1>
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
            <h1>Altstadt</h1>
            <h2>{data[1]} members</h2>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gvNfBi4tSutu51qWoKWY6NGGDoBIeeYizibT1PlVrvtgwQL2LNsu2-ZKrxE3a7YwzqI&usqp=CAU"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Mainz</h1>
            <h2>{data[2]} members</h2>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

export default Featured;
