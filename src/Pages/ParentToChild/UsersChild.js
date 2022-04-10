

import React from 'react';
import "../../scss/market.scss";

const UsersChild = (props, index) => {
  return (
   
      <div className="row bdr-btm">
                    <div className="col-sm-1">{ props.index }</div>
                    <div className="col-sm-3">{ props.userFirstName  }</div>
                    <div className="col-sm-3">{ props.userLastName  }</div>
                    <div className="col-sm-2">{ props.userAge }</div>
                    <div className="col-sm-3">{ props.userCountry }</div>
                </div>
    
  )
}

export default UsersChild;
