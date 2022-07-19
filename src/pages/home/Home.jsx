import React from 'react'
import './Home.css';
import Featured from '../../components/features/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import PropertyList from '../../components/propertylist/PropertyList';
import FeaturedProperties from '../../components/featured properties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
       <Featured/>
  <div className="homeTitle">Browse by property type</div>
  <PropertyList/>
  <div className="homeTitle">Connect with other travellers</div>
  <FeaturedProperties/>
  <MailList/>
  <Footer/>
        </div>
    </div>
  )
}

export default Home;