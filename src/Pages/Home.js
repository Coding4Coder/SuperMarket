

import React from 'react';
import PageHeading from '../Components/PageHeading';
import "../scss/market.scss";
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = "Welcome to the Fresh Super Market";
    })
  return (
    <div className="container-fluid pad">
        <PageHeading pageTitle={"Welcome to Fresh Super Market"} />

      <div className="main-container text-center">
            <h2 className="display-6  pad-b">Delivering fast, fresh food to your door step</h2>
            <p>
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <p>
            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
      
    </div>
  )
}

export default Home;
