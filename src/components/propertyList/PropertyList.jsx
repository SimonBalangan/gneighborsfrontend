import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("https://gneighbors-backend.onrender.com/api/hotels/countByType");
  // const { data, loading, error } = useFetch("/products/countByType");

  const images = [
    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDsccXATC4If-IoG3XKow8Vga4S3DxEM3x35UkpTUwTt7b_DAVFBRw-icRs4HgIJZV70&usqp=CAU",
    "https://as2.ftcdn.net/v2/jpg/04/80/31/19/1000_F_480311958_UWxQ1poSP7Lgx6SUQbM6g88JKnlYP5H4.jpg",
    "https://www.spielregeln.de/wp-content/uploads/2019/10/schmidt-spielesammlung-4.jpg",
    "https://dadslife.at/media/2019/11/spielzeug-baby-1200-630-oh.jpg",
  ];
  return (
    <div className="container-box">
      <h1 className='header-text-pop'>Discover the content</h1>
    <div className="pList">
    
      {loading ? (
        "loading"
      ) : (
        <>
          {data && images.length && 
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  {/* <h1>{data[i]?.type}</h1> */}
                  <h3>{data[i]?.count} {data[i]?.type}</h3>
                </div>
              </div>
            ))}
        </>
      )}
    </div></div>
  );
};

export default PropertyList;
