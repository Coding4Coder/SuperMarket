
import React from 'react';
import amazon from "../img/amazon.png";
import "../scss/market.scss";
import PageHeading from './PageHeading';

const Amazon = () => {
  return (
    <div className="container-fluid pad text-center">
    <PageHeading pageTitle={"Amazon Movie"} />
   
            <div className="main-container text-center movie"> 
              <img src={amazon} alt="" />
             </div>
    </div>
  )
}

export default Amazon;
