import "./howTo.css"
import {Button}  from 'react-bootstrap'

const images = [
  "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  "https://www.incimages.com/uploaded_files/image/1920x1080/getty_494605768_2000133320009280151_316966.jpg",
  "https://as2.ftcdn.net/v2/jpg/04/80/31/19/1000_F_480311958_UWxQ1poSP7Lgx6SUQbM6g88JKnlYP5H4.jpg",
  "https://www.spielregeln.de/wp-content/uploads/2019/10/schmidt-spielesammlung-4.jpg"
];


const HowTo = () => {
  const handleClick = () => {

  }
  return (
    <>
      <div className="howTo">
        <h1 className="howToTitle">Save time and money!</h1>
        
        
          <span className="howToInputContainerBtn">
            <button onClick={() => {
              handleClick();
            }} className='borrowBtn'>How to Borrow</button>
            <button onClick={() => {
              handleClick();
            }} className='lendBtn' >How to Lend</button>
          </span>
        
        <span className="howToDesc">Sign up and be part of the change.</span>
      <div className="pList">
          {
            images.map((img,i) => (
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