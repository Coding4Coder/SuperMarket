

import React, { useState } from 'react';
import PageHeading from '../../Components/PageHeading';
import { useNavigate } from 'react-router-dom';
import "../../scss/market.scss";
import UsersChild from './UsersChild';

const UsersParent = () => {
       let navigator = useNavigate();

        const users = [
            {
                firstname: "John",
                lastname: "Smith",
                age: 35,
                country: "USA"
            },
            {
                firstname: "David",
                lastname: "Peter",
                age: 40,
                country: "UK"
            },
            {
                firstname: "Spotney",
                lastname: "Miller",
                age: 32,
                country: "France"
            }
        ];

        const goBackPage = () => {
            navigator("/interview-questions/letsdoit/")
        }
 

  return (
    <div className="container-fluid pad text-center">
    <PageHeading pageTitle={"Passing Data - Parent to Child"} />

    <button className="btn btn-primary" onClick={ goBackPage }> Back </button>
 
            <div className="main-container text-center"> 

            {
                users.map((user, index) =>
                    <UsersChild  key={index}
                    index={index+1} 
                    userFirstName={user.firstname}
                    userLastName={user.lastname}
                    userAge={user.age}
                    userCountry={user.country}
                      />
                )
            }

            </div>
      
    </div>
  )
}

export default UsersParent;
