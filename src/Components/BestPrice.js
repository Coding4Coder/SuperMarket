

import React from 'react';
import "../scss/market.scss";

const BestPrice = ({children, open, close}) => {

        if(!open) return null;

  return (
         <> 
         <div className="overlayMask" />
            <div className="main-container text-left model-pop"> 
                 <button className="btn btn-close" onClick={close} />
                 {children}
            </div>
        </>
  )
}

export default BestPrice;
