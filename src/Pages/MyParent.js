

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeading from '../Components/PageHeading';
import "../scss/market.scss";
import MyChild from './MyChild';

const MyParent = () => {
    const [counter, setCounter] = useState(0);
    const navigation = useNavigate();

  const goToBack = () => {
    navigation("/interview-questions/letsdoit/");
  }
  const countHandler = () => {
    setCounter(counter+1);
  }
  return (
    <div className="container-fluid pad text-center">
    <PageHeading pageTitle={"Passing Data - Child to Parent"} />
    <button className="btn btn-primary" onClick={ goToBack }> Back </button>
 
            <div className="main-container text-center"> 
            <p className="msgBox">
              { counter }
               </p>
              <MyChild countMe={ countHandler } />
            </div>
      
    </div>
  )
}

export default MyParent;
