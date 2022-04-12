
import React from 'react';
import { FaPray } from 'react-icons/fa';
import war from "../img/war.png";
import "../scss/market.scss";
import PageHeading from './PageHeading';
const War = () => {
    
  return (
    <div className="container-fluid pad text-center">
    <PageHeading pageTitle={"War Movie"} />
   
 
      <div className="main-container text-center movie"> 
      <img src={war} alt="" />
      </div>
    </div>
  )
}

export default War;
