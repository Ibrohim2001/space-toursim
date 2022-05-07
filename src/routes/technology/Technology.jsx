import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './Technology.css';
import { tech_data } from '../../static/technology_data';

const Technology = () => {
  const [techImg, setTechImg] = useState(0);

  return (
    <div className='technology'>
      <Navbar/>
      <div className="technology_container">
        <h2 className='dest_title font-ff-one'><span>03</span> SPACE LAUNCH 101</h2>
        <div className="technology_content">
          <div className="tech_left">
            <ul className="tech_nav">
              {tech_data.map((tech_item, index) => 
                <li key={index}>
                  <button className='font-ff-one' style={tech_item.id === techImg ? {color: "#0B0D17", background: "#fff"} : null} onClick={() => setTechImg(tech_item.id)}>{tech_item.number}</button>
                </li>  
              )}
            </ul>
            {
                tech_data.map((tech_item, index) =>
                  <div className="tech_text" key={index}>
                      <h2 className='font-ff-one tech_title'>{tech_item.id === techImg && tech_item.termin}</h2>
                      <h1 className='font-ff-two'>{tech_item.id === techImg && tech_item.tech_name}</h1>
                      <p className='font-ff-one tech_info'>{tech_item.id === techImg && tech_item.tech_text}</p>
                  </div>
                )}
            
          </div>
          <div className="right">
                <div className="tech_img">
                  <img src={tech_data[techImg].tech_img} alt="" />
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology