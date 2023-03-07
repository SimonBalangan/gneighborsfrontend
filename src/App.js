import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
// import Hotel2 from "./pages/hotel/Hotel2";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import SinglePage from "./pages/singlepage/SinglePage";
import './index.css'
import {Button}  from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        {/* <Route path="/products" element={<List/>}/> */}
        {/* <Route path="/products" element={<SinglePage/>}/> */}
        <Route path="/hotels/:id" element={<Hotel/>}/>
        {/* <Route path="/products/:id" element={<Hotel/>}/> */}
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/hotels/:id" element={<SinglePage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
