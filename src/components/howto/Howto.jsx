import "./howTo.css"


const images = [
  "https://www.peerby.com/beta-dashboard/img/ill_how-dem-1.png",
  "https://www.peerby.com/beta-dashboard/img/ill_how-dem-2.png",
  "https://www.peerby.com/beta-dashboard/img/ill_how-dem-3.png",
  "https://www.peerby.com/beta-dashboard/img/ill_how-dem-4.png"
];


const HowTo = () => {
  const handleClick = () => {

  }
  return (
    <>
      <div className="howTo">
        <h1 className="howToTitle">How does Good Neighbors work?</h1>
        
        
          {/* <span className="howToInputContainerBtn">
            <button onClick={() => {
              handleClick();
            }} className='borrowBtn'>How to Borrow</button>
            <button onClick={() => {
              handleClick();
            }} className='lendBtn' >How to Lend</button>
          </span> */}
        
        <span className="howToDesc">Borrow</span>
      <div className="pList">
          {
            images.length && images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
              
              </div>
            ))}
            
  
    </div>
      </div>
      
   
   
    </>


  )
}

export default HowTo  


  {/* <p>
          1. Search 
          Search for a product near you
          </p> */}