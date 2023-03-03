import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";






const Hotel = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`)

const { user } = useContext(AuthContext)

const { dates } = useContext(SearchContext);

const navigate = useNavigate();

//Rechnet die Ausleihdauer aus
const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);


console.log(dates)

  // const photos = [
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  //   {
  //     src: "https://www.lidl.de/assets/gcp1bfb3bc3d9c540a5bbc8f3a7f48eb41f.jpeg",
  //   },
  // ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header  />
      {loading ? (
        'loading'
        ) : ( 
        <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
            {/* <img src={data.photos[slideNumber].src} alt="" className="sliderImg" /> */}
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
{/* PRODUKTBESCHREIBUNG UND LOCATION + USERNAME */}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{data.name}</h1>
          <span className="hotelDistance">
            Product is –  {data.distance} m away from your location
          </span>
{/* BILDER DER PRODUKTE */}          
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  // src={photo.src}
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">User: {data.title}</h1>
               <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
           </div>
            </div>
           
            {/* Blaue Box mit Infos */}
            <div className="hotelDetailsPrice">
              <h2>
                <b>{days} days rental</b>
              </h2>
              <button onClick={handleClick}>
                Reserve Now!
              </button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  );
};

export default Hotel;
