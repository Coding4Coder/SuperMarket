

import React, { useEffect, useState } from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';
import axios from 'axios';
import BestPrice from '../Components/BestPrice';

const Home = () => {
  const[isOpen, setIsOpen] = useState(false);

  const [homeText, setHomeText] = useState([]);

    const loadHomePageText = async () => {
      let result = await axios.get("http://localhost:5000/homepage/");
      setHomeText(result.data);
    }
      console.log(homeText);
  

    useEffect(() => {
      loadHomePageText();
        document.title = "Welcome to Fresh Super Market";
    },[]);

      const openModal = () => {
        setIsOpen(true);
      }
      const closeModel = () => {
        setIsOpen(false);
      }
  return (
    <div className="container-fluid pad text-center">
         <PageHeading pageTitle={"Welcome to Fresh Super Market"} />
         <button className="btn btn-primary" onClick={ openModal }>Best Price Guarantee</button>
         <BestPrice open={isOpen} close={closeModel}>
           <h3 className="display-6 text-center" > Best Price Guarantee !</h3>
            <ul>
            <li>If the other offer is on a website that doest reveal the property or accommodation type youll be staying in until after booking. 
            </li>
            <li>If the other offer is part of a loyalty or rewards program. We define this type of other offer as any situation where a customer gets a reduced price from a property or other website as a reward for repeat business, logging in, entering a coupon code, referring other customers, or performing any other action that then changes the initially shown price. 
            </li>
            <li>If your booking or the offer you're comparing is labeled as a "Partner offer" (i.e. is facilitated by a Booking.com partner company).
            </li>
            <li>You can claim a refund for the difference if you find your reservation cheaper on another website.

            </li>
        </ul>
         </BestPrice>
      <div className="main-container text-center">
          
             
            {
            homeText.map((homePage) => (
              <>
             <h2 className="display-6  pad-b"> {homePage.hometitle}</h2>
             <p className="homeImg"> <img src={homePage.photo} alt="" /> </p>
              <p> {homePage.hometext}</p>
              </>
              ))
            }
          
      </div>
    </div>
  )
}

export default Home;
