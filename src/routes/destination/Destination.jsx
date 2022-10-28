import React, { useState } from "react";
// import { NavLink } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import { destination_data } from "../../static/destinations_data";
import "./Destination.css";

const Destination = () => {
  const [planetImg, setPlanetImg] = useState(0);
  return (
    <div className="destination">
      <Navbar />
      <div className="destination_container">
        <h2 className="dest_title font-ff-one">
          <span>01</span> Pick up your destination
        </h2>
        <div className="destination_content">
          <div className="destination_left">
            <img src={destination_data[planetImg].link} alt="" />
          </div>
          <div className="destination_right">
            <ul className="dest_nav">
              {destination_data.map((dest_item, index) => (
                <li key={index}>
                  <button
                    className={
                      dest_item.id === planetImg
                        ? "font-ff-one active_item"
                        : "font-ff-one"
                    }
                    onClick={() => setPlanetImg(dest_item.id)}
                  >
                    {dest_item.destination_name}
                  </button>
                </li>
              ))}
            </ul>
            <div>
              {destination_data.map((dest_item, index) => {
                return (
                  planetImg === index && (
                    <div className="dest_text" key={index}>
                      <h1 className="font-ff-two">
                        {dest_item.id === planetImg &&
                          dest_item.destination_name}
                      </h1>
                      <p className="font-ff-one paragraph">
                        {dest_item.id === planetImg &&
                          dest_item.destination_text}
                      </p>
                    </div>
                  )
                );
              })}
            </div>
            <div>
              {destination_data.map((dest_item, index) => {
                return (
                  planetImg === index && (
                    <div className="dest_info" key={index}>
                      <p>
                        <span className="font-ff-one subheading-two">
                          {dest_item.id === planetImg && dest_item.avg_text}
                        </span>
                        <span className="font-ff-two subheading-one">
                          {dest_item.id === planetImg && dest_item.avg_distance}
                        </span>
                      </p>
                      <p>
                        <span className="font-ff-one subheading-two">
                          {dest_item.id === planetImg && dest_item.travel_text}
                        </span>
                        <span className="font-ff-two subheading-one">
                          {dest_item.id === planetImg && dest_item.travel_time}
                        </span>
                      </p>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
