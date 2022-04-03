

import React, { useEffect, useState } from 'react';
import "../scss/market.scss";
import PageHeading from '../Components/PageHeading';
import axios from 'axios';

const About = () => {
  const [aboutText, setAboutText] = useState([]);

    const loadAboutPageText = async () => {
      let result = await axios.get("http://localhost:5000/about/");
      setAboutText(result.data);
    }
      console.log(aboutText);
  

    useEffect(() => {
        loadAboutPageText();
        document.title = "About the Fresh Super Market";
    },[]);

  return (
    <div className="container-fluid pad">
         <PageHeading pageTitle={"About Fresh Super Market"} />
      <div className="main-container text-center">
          
             
            {
            aboutText.map((aboutPage) => (
              <>
             <h2 className="display-6  pad-b"> {aboutPage.title}</h2>
              <p> {aboutPage.displaytext}</p>
              </>
              ))
            }
          
      </div>
    </div>
  )
}

export default About;
