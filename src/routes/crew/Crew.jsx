import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import { crew_data } from '../../static/crew_data';
import './Crew.css'

const Crew = () => {
  const [crewImg, setCrewImg] = useState(0);

  return (
    <div className='crew'>
      <Navbar/>
      <div className="crew_container">
        <h2 className='crew_title font-ff-one'><span>02</span> Meet your crew</h2> 
        <div className="crew_content">
          <div className="left">
            <div className="crew_text">
              {
                crew_data.map((crew_item, index) => 
                { return crewImg === index && <div key={index}>
                  <h2 className='font-ff-two'>{crew_item.id === crewImg && crew_item.title}</h2>
                  <h1 className='font-ff-two'>{crew_item.id === crewImg && crew_item.member_name}</h1>
                  <p className='font-ff-one paragraph'>{crew_item.id === crewImg && crew_item.about_member}</p>
                </div>}  
              )
              }
            </div>
            <ul className='crew_nav'>
              {crew_data.map((crew_item, index) => 
                  <li key={index} style={crew_item.id === crewImg ? {opacity: "1"} : {opacity: "0.17"}}>
                    <button className='font-ff-one' onClick={() => setCrewImg(crew_item.id)}></button>
                  </li>)}
              </ul>
          </div>
          <div className="right">
            <div className="crew_img">
              <img src={crew_data[crewImg].crew_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew