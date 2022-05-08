import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Home.css';
import { home_data } from '../../static/home_data';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="home_container">
        { home_data.map((home_item, index) => 
         <div key={index}>
          <div className="left">
            <h2 className='font-ff-one'>{home_item.subheading}</h2>
            <h1 className='font-ff-two'>{home_item.heading}</h1>
            <p className='font-ff-one paragraph'>{home_item.home_text}</p>
          </div>
          <div className="right">
            <button className='explore_btn font-ff-two heading-four'>Explore</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Home