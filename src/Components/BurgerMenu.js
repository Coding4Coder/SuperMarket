

import React, { useEffect, useState } from 'react';

import "../scss/burgerMenu.scss";
import { NavLink } from 'react-router-dom';
import { SidebarMenuNav} from "react-bootstrap-sidebar-menu";

const BurgerMenu = () => {
   

  return (
    <div>
  
    <main id="page-wrap">
                <NavLink className="link-danger" to="/">Home</NavLink>
                <NavLink className="link-danger" to="/about/">About</NavLink>
                <NavLink className="link-danger" to="/items/">Items</NavLink>
                <NavLink className="link-danger" to="/interview-questions/">Interview Questions</NavLink>
          </main>
      
    </div>
  )
}

export default BurgerMenu;
