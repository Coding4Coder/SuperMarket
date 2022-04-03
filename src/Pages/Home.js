

import React, { useEffect, useState } from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';
import axios from 'axios';

const Home = () => {
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

  return (
    <div className="container-fluid pad">
         <PageHeading pageTitle={"Welcome Fresh Super Market"} />
      <div className="main-container text-center">
          
             
            {
            homeText.map((homePage) => (
              <>
             <h2 className="display-6  pad-b"> {homePage.hometitle}</h2>
             <p> {homePage.photo}</p>
              <p> {homePage.hometext}</p>
              </>
              ))
            }
          
      </div>
    </div>
  )
}

export default Home;
