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




const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      
        
      <TextContainerCity/>
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <HowTo/>
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
