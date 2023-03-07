import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
import TextContainerCity from '../../components/textContainerCity/TextContainerCity' 
import HowTo from "../../components/howto/Howto";
import Carousel from "../../components/borrow/Borrow";
import Test from "../../components/test/Test";
import Borrow from "../../components/borrow/Borrow";
import Lend from "../../components/lend/Lend";
import Why from '../../components/why/Why'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      
        
        <TextContainerCity/>
        <Featured/>
        {/* <Test/> */}
       <Borrow/>
       <Lend/>
        {/* <HowTo/> */}
        
        {/* <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/> */}
        {/* <MailList/> */}
        <Why/>
  
        <PropertyList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
