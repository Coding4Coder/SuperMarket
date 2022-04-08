

import React, { useState } from 'react';
import PageHeading from '../Components/PageHeading';
import "../scss/market.scss";
import { 
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";

const LetsDoIT = () => {


     const[value, setValue] = useState();
    //
  const disContent = "<p>I am a nice and <span class='txtTitle'>super duper</span> hit text paragraph, that need to show in an aweosme way, so let's handle me carefully..</p>"

  const btnInnerTxt = () => {
      document.getElementById("showContent").innerText = disContent;
  }
  const btnInnerHTML = () => {
    document.getElementById("showContent").innerHTML = disContent;
}


  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"Let's Do It.. Interview Questions"} />
    <div className="main-container">
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Difference between innerText, innerHTML and value?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                innerText return HTML element (entire code) as a string and display HTML element on the screen (as HTML code),<br/> while innerHTML return only text content of the HTML element.
                <div className="flx-container">
                    <button onClick={btnInnerTxt} className="btn btn-secondary mar-r">InnterText</button>
                    <button  onClick={btnInnerHTML} className="btn btn-secondary">InnterHTML</button>
                    <div className="break" />
                    <div className="showContent" id="showContent">
                       
                    </div>
                    

                </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>

    </div>
    </div>
  )
}

export default LetsDoIT;
