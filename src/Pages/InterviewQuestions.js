

import React, { useEffect, useState } from 'react';
import PageHeading from '../Components/PageHeading';
import { 
    Accordion, 
    AccordionItem, 
    AccordionItemHeading,
    AccordionItemButton, 
    AccordionItemPanel
    } from "react-accessible-accordion";
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {FaAngleRight} from "react-icons/fa";

const InterviewQuestions = () => {
    
const [questions, setQuestions] = useState([]);

const loadQuestions = async () => {
    return await axios.get("http://localhost:5000/interviewQuestions/")
    .then((response) => {
        setQuestions(response.data);
    }).catch((err) => {
        console.log(err, "couldn't load the questions");
    })
}
console.log(questions)

useEffect(() =>{
    loadQuestions();
    document.title= "React Interview Questions";
}, []);

  return (
    <div className="container-fluid pad">
    <PageHeading pageTitle={"Interview Questions"} />
    <div className="flx-container">
        <NavLink to="/interview-questions/letsdoit/" className="">Let's do it <FaAngleRight /> </NavLink>
    </div>
 <div className="main-container iqa">
     <Accordion>
         {
             questions.map((question, index) => {
                 return (
                    <AccordionItem key={index}>
                    <AccordionItemHeading>
                        <AccordionItemButton>{ question.questionTitle } </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    { question.questionAnswer } 
                    <img className="imgQ" src={ question.qImg } alt="" />
                    </AccordionItemPanel>
                  </AccordionItem>
                 )
             })
         }
        
     </Accordion>
 </div>
      
    </div>
  )
}

export default InterviewQuestions;
