import './list.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';
import Footer from '../../components/footer/Footer';

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [product, setProduct] = useState(location.state.product);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  console.log('//////////', product);

  //Fetch der Daten für die Bezirke noch unter CITY
  const { data, loading, error } = useFetch(`${process.env.REACT_APP_API}/api/hotels?city=${destination}&name=${product}`);

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Header />
    <div className='list-container'>
      
      <div className='listResult'>
        {loading ? (
          'loading'
        ) : (
          <>
            {/* Hier wird die Item-Liste geladen */}
            {data.length && data.map(item => <SearchItem item={item} key={item._id} />)}
          </>
        )}
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default List;

// import React, { useState } from 'react'
// import Navbar from '../../components/navbar/Navbar'
// import Header from '../../components/header/Header';
// import SearchItem from "../../components/searchItem/SearchItem";
// import { useLocation } from 'react-router-dom';

// const List = () => {

//   const location = useLocation();
//   const [product, setProduct] = useState(location.state.product);
//   const [destination, setDestination] = useState(location.state.destination);
//   const [date, setDate] = useState(location.state.date);

//   console.log(location)
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <div className='listResult'>
//         <SearchItem/>
//         <SearchItem/>
//         <SearchItem/>
//         <SearchItem/>
//         <SearchItem/>
//       </div>
//     </div>
//   )
// }

// export default List
